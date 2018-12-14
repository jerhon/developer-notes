# Performance Overview

When working with node.js there are a few things to keep in mind in regard to performance and the threading model.

## Threading

Node.js has a single threaded event-loop that can farm asynchronous calls off to a thread pool.

## Node.js is not good for CPU bound programming

Unless you are doing out of the ordinary, the code you write in a Node.js application will always run in the same thread with the exception of asynchronous calls.  This means you don't have to worry about things like locking.  However, this also means if you block in any portion of your code, this will prevent any other code from running.  In instances where an application is simply moving data from one source to another, such as a database through an API, this is not much of a concern.  For heavy analytical applications that need to do CPU processing, Node.js probably isn't the best environment.

## Node.js does simplify resource access (kind of)

Much of multi-threaded programming is dedicated to shared usage of resources.  Much work needs to be done to keep shared resources thread safe so that if multiple threads are accessing them, there are no unintended consequences.  


## ALWAYS avoid synchronous code when an asynchronous pattern is available

A recent example of a situation where I ran into severe performance degradation was working through a large set of records where each record had a good chunk of data compressed.  The coder had written a block of code whereby a large set of records was to be decompressed all at once.  The code was using the zlib built-in library, but with synchronous calls to decompress the data.  The decompression itself was done within an async method.  The code had a collection of rows, and made a call to iterate through all the rows and wait for all the promises to complete.

What ended up happening was the asynchronous code made it as far as the decompression in each record.  Thus the Node.js process was attempting to decompress all the data for all the records in succession.  Since the Node.js can only handle one CPU task at a time in it's main event-loop, this caused the event loop to be filled up with requests to decompress.

As the event loop filled up, once the actual results came in, the continuation for the promise was pushed to the event loop to complete with the result of the decompression.  This caused memory to fill up with the decompressed data.  Since the completion of the original process over the rows of data involved several continuations, this led to degraded performance, and with enough rows eventually ended up crashing the Node.js process with an out of memory error.

Envision the event queue to have the following items to process.  Keep in mind decompress in this case was a process that took a very long time to process.  However, even if it wasn't this would have still been an issue.

* Decompress record 1
* Decompress record 2
* Decompress record 3
* Decompress record 4
* Decompress record 5
* Decompress record 6
* ....
* Up to N records

As it iterates through the list for a few records, this would become

* Decompress record 2
* Decompress record 3
* Decompress record 4
* Decompress record 5
* Decompress record 6
* ....
* Up to N records
* Process record 1 (with huge set of decompressed data )
* Process record 2 (with huge set of decompressed data )

Eventually it would be out of control, and Node.js couldn't keep up
* Decompress record 50
* ....
* Up to N records
* Process record 1 (with huge set of decompressed data )
* Process record 2 (with huge set of decompressed data )
* Process record 3 (with huge set of decompressed data )
...
* Process record 49 (with huge set of decompressed data )

And finally, the queue is gone, because the application crashed due to being out of memory. Not good.

The problem was resolved in a few ways.
1. Always use asynchronous operations when possible.  The only way to multi-thread in Node.js is to try farm operations off with asynchronous calls.  This is especially true of calls that are bound to some resource like I/O or CPU.
2. Results from the database should always either have a limit in processing, or an implementation such as the Bluebird APIs for arrays of Promises should be used.  Another option is streaming, but only if it limits the number of items being concurrently executed.
