# Design Patterns

## Factory

A factory is an class or method that creates a new object assembling it from external dependencies.

### Factory Example



## Builder

A builder is a class that creates a new object, but needs the external code to provide dependencies in order to build the end object.

A good example of this is a StringBuilder.  The point of a string builder is to create a string.  However, in order to create the string, individual pieces of the string need to be provided in order to build the resulting string.


## Singleton

A singleton is an object that lives for the lifetime of the application.

This is a confusing pattern as it mixes some different patterns together into a single idea.   At it's heart, a singleton which has a single instance for the entire lifetime of a class.  This requires some special semantics during object creation to ensure that a single instance of the class exists for the program.

### Cons

* Inability to reset


## Dependency Injection

Dependency injection is a pattern of removing object creation from code and instead moving the creation of objects to being supplied as a constructor or method.
