# Spring Data JPA

Spring Data JPA is a data access wrapper for spring framework.  It makes it incredibly easy to build data models with spring framework.

One key feature is that once a POJO is written certain interfaces can be extended to provide basic data access.

# Simple CRUD Operations

The CrudController<> 

This provides simple CRUD operations against a POJO.  For example, the following implementation would be enough to create a simple class which can add a Kid to a database, find a kid in a database, etc.

```java
@Entity
public class Kid {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    Long id;
    String firstName;
    String lastName;

    protected Kid() { }

    public Kid(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}

public interface KidRepository extends CrudRepository<Kid, Long> { }
```


# Application Properties
Changing the data store is as simple as updating the configuration in the application.properties file.  This is an example of using a connection to MySql

.ddl-auto will set up the user to create the database


application.properties
```
spring.jpa.hibernate.ddl-auto=create
spring.datasource.url=jdbc:mysql://localhost:3306/db_example
spring.datasource.username=springuser
spring.datasource.password=ThePassword
```