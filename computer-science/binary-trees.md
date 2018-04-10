# Binary Tree Overview

A binary tree is a tree with nodes that consist of two children, typically a left and right node.  Each node can have a value associated with it.

# Using Generators or Enumerators

Many tree problems require iterating through a tree to find a solution.  A generator function or an IEnumerable<> in C# can make many of these problems much easier to solve. For example the method below would allow enumeration through the tree giving us each path that it encounters (even including intermediate paths.)


```C#
// represents a tree path
class TreePath<T> {
    public TreePath() { }
    public TreePath(Tree<T> node) {
        Path = new Tree<T>[1] { node };
        Node = node;
        Parent = null;
    }
    public IEnumerable<Tree<T>> Path {get; private set;}
    public Tree<T> Node {get; private set;}
    public TreePath<T> Parent {get; private set;}
    public TreePath<T> Append(Tree<T> node) {
        var result = new TreePath<T>();
        result.Path = Path.Concat(new[] { node });
        result.Node = node;
        result.Parent = this;
        return result;
    }
}

// Enumerates through the tree and returns a IEnumerable of each of the
// possible paths in a tree.
IEnumerable<TreePath<T>> EnumeratePaths<T>(Tree<T> t) {
    Stack<TreePath<T>> treeStack = new Stack<TreePath<T>>();
    treeStack.Push(new TreePath<T>(t));
    while (treeStack.Count > 0) {
        var current = treeStack.Pop();
        yield return current;
        if (current.Node.right != null) {
            treeStack.Push(current.Append(current.Node.right));
        }
        if (current.Node.left != null) {
            treeStack.Push(current.Append(current.Node.left));
        }
    }
}
```

Any path that terminates with a node where right == null && left == null is a leaf node.


## Tree Reference Class

```C#
class Tree<T> {
  public T value { get; set; }
  public Tree<T> left { get; set; }
  public Tree<T> right { get; set; }
}
```

# Sample Problems
https://codefights.com/interview-practice/task/TG4tEMPnAc3PnzRCs/solutions/6wQxiTo6eKpYx4Yum