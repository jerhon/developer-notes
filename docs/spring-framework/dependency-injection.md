# Wiring Up Dependencies

Dependencies can be wired up via
* XML
* Annotations
* Programmatically

The different models can be combined.  

# XML File

An XML file can be used to wire up dependencies.  Each concrete definition of a dependency that can be instantiated is referred to as a "bean"?

The class to use to actually get to the container for the XML file is ClassPathXmlApplicationContext


Example:
```java
context = new ClassPathXmlApplicationContext("META-INF/spring/mydocuments-context.xml");
                engine = context.getBean(SearchEngine.class);
```

Sample XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beanshttp://www.springframework.org/schema/beans/spring-beans.xsd">
 
  <bean id="engine" class="com.apress.isf.java.service.MySearchEngine" />
   
  <bean id="documentType" class="com.apress.isf.java.model.Type">
    <property name="name" value="WEB" />
    <property name="desc" value="Web Link" />
    <property name="extension" value=".url" />
  </bean>
     
</beans>
```

## Adding Annotations

A context:component-scan element can be included in an XML file to also add in annotated components rather than having to explicitly define it all.

## Thoughts

* This is very verbose, and takes a lot of extra management outside where the code sits.  
* Could be prone to error as class definitions need to be explicitly denoted.
* Annotations can work better, but they aren't as explicit about what get's connected where.
* This introduces the annotation dependency in your library

# Annotations

Uses annotations on classes in order to wire them up in the DI container.

## Components

Not 100% clear on what all this is?

@Component
@Repository 
@Service
@Controller 


## Bean Configuration

Uses annotations sort of, but a @Configuration / @Bean annotation is used to create the instances of the classes.

# Groovy

Uses a groovy file to wire up the DSL.



# Questions

What do you do about libraries that depend on spring framework and matching versions, especially for dependency injection, etc?

I assume external libraries would provide ways to insatiate their objects and then a factory pattern should be used to access the external dependencies?

Factory pattern, how do you do it in Spring?

# DI Object Lifecycle

Do objects need to be released, or is that done automatically?
Does the container keep track of the objects?

Singleton - single instance
Prototype - new prototype every time
Request - 