# Microservices Overview

A Microservice is a small service typically tasked with performing a single responsibility or role in a much larger software application.  This pattern is somewhat opposite to a monolithic architecture where there are not clear boundaries between different services in the software-- they are all served as one entity.

While many of the concepts of Microservices have been around for some time, Microservices are a recent trend in software development.  Many new applications and software are written using Microservices in mind.

# What is a microservice

A microservice in general is an API service that does one thing really well.  It's new and popular and thus a very ambiguous term

* Small
* Does one thing really well
* Automated testing and deployment
* Embraces failures and plan for them


# Benefits

* Modular design promotes smaller updates to the system than a monolithic design.
* Fault tolerance is good as they are designed to allow multiple instances.


# Cons

* More services increases the number of integrations across the organization.
* More endpoints to worry about, and boundaries between components now become network boundaries
* Transactions become more  difficult if an operation touches


# Patterns to consider

When building a microservice architecture there are many patterns that come into play that need to be taken into consideration.

## API Gateway

The typical problem with the microservice model is that a number of services now become available where previous one endpoint was.  To remedy this, an API Gateway is often used as a singular endpoint into the system.

### Advantages
* Since there is a singlar endpoint, there is a singluar point all requests must go through this allows
  * Request / response tracking
  * A centralized point to obtain and verify security
  * Design patterns such as circuit breakers, load balancing, routing


## Disadvantages
* This provides an additional integration into the system with added complexity
* Configurations of services need to be managed with their deployment
* Services need to be kept track of (this can be mitigated by utilizing service discovery)

## Service Discovery
