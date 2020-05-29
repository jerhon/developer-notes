# Nuances

Various language nuances in Java.  Especially those that are different for a .NET developer transitioning to Java.

# Inner Classes



## Static Class / Non-Static

A static class allows access to the child class without an instance of the parent class.  A non-static class does not.

### Example #1

```java
public class Foo {
    public Foo() { }
    public static class Bar {
        public Bar() { }
    }
}
```

The Bar class can be instantiated like so:

```java
Foo.Bar x = new Foo.Bar();
```

### Example #2

```java
public class Foo {
    public Foo() { }
    public class Bar {
        public Bar() { }
    }
}
```

To instantiate this, you need an instance of the Foo class.

```java
Foo x = new Foo();
Foo.Bar y = x.new Bar();
```

# Date/Calendar

Most dates are evaluated in terms of a Calendar.  Date.getYear()..., etc are deprecated.  For example, something like this should be used to get the year of a date.  The Verbosity of simple things in java cannot be understated.

```java
Date d = new Date();
Calendar c = new GregorianCalendar(d);
int year = c.get(Calendar.YEAR);
```