# Linked List Overview

Some tips and tricks to make linked list problems easier to solve.

# Convert the Linked List to an Enumerable (or Generator)

One thing that's common for linked list style problems is a need to enumerate through entries.  Making a generator like this makes enumerating through the entries much easier.  It also makes more complicated problems easier to solve with Linq constructs in lanugages such as .NET.

```c#
IEnumerable<ListNode<T>> GetListNodeEnumerable<T>(ListNode<T> start) {
    var current = start;
    while (current != null) {
        yield return current;
        current = current.next;
    }
}
```

For example, the problem of finding if a linked list is a palindrome can be solved with some simple Linq operations once the ListNode can be converted to an IEnumerable.  [Code Fights Solution](https://codefights.com/interview-practice/task/HmNvEkfFShPhREMn4/solutions/CbEfp9SRFJd24xGsT)