# Java

Java is a programming language that has been around since the 90s. 


# Gotchya's for C# developers

* Interfaces are not prefixed to denote the difference between an interface and a class.  For example, in C# List<T> is a class that is similar to an array of items with variable length.  In Java List is an interface, but ArrayList is the class for an array of items with variable length.  There is no naming convention to know List is an interface.  Thus, someone would have to know by inspection of it's source or reading of the docs.
* Generic arrays are not allowed.  If I have a generic variable of type TValue, I cannot instantiate an array via ```new TValue[maxSize];```
