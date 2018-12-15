# Factory

The factory design pattern focuses on creating objects.  There are a few different flavors of this pattern used for different purposes.



## Differences from a Builder.

The Factory pattern has the information needed in order to construct an object whereas the builder pattern needs to be supplied the information in order to construct an object.

Think of a StringBuilder in .NET or Java, the StringBuilder requires providing multiple strings.  Once the ToString() is called, the builder takes all the strings and combines them together to build the string.