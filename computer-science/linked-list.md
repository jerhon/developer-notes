# Linked List Overview

Some tricks to make Linked List problems easier to solve.

# Convert the Linked List to an Enumerable (or Generator)

```c#
IEnumerable<ListNode<T>> GetListNodeEnumerable<T>(ListNode<T> start) {
    var current = start;
    while (current != null) {
        yield return current;
        current = current.next;
    }
}
```