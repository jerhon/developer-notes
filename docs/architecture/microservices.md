# Microservices

A Microservice is a small service typically tasked with performing a single responsibility or role in a much larger software application.  This pattern is somewhat opposite to a monolithic architecture where there are not clear boundaries between different services in the software-- they are all served as one entity.

While many of the concepts of Microservices have been around for some time, Microservices are a recent trend in software development.  Many new applications and software are written using Microservices in mind.

## What is a microservice

A microservice in general is an API service that does one thing really well.  It's new and popular and thus a very ambiguous term

* Small
* Does one thing really well
* Automated testing and deployment
* Embraces failures and plan for them


## Benefits

* Modular design promotes smaller updates to the system than a monolithic design.
* Fault tolerance is good as they are designed to allow multiple instances.


## Cons

* More services increases the number of integrations across the organization.
* More endpoints to worry about, and boundaries between components now become network boundaries
* Transactions become more  difficult if an operation touches


## Patterns to consider

When building a microservice architecture there are many patterns that come into play that need to be taken into consideration.

### API Gateway

The typical problem with the microservice model is that a number of services becomes unmanagable or requires multiple connections to different servers.
To remedy this, an API Gateway is often used as a single endpoint into the system.
This reduces the number of endpoints that need to be exposed, and simplifies client connections.

An API Gateway will combine a reverse proxy and a router.


#### Advantages

* Request / response tracking
* A centralized point for security
* Design patterns such as circuit breakers 
* Load balancing 
* Routing

#### Disadvantages

* This increases the number of required integrations in the system, thus increasing complexity
* Configurations of services need to be managed with their deployment
* Services need to be kept track of (this can be mitigated by utilizing service discovery)

### Service Discovery

Service discovery is the automatic detection of one or more services.
Typically, rather than having to register a service at a central administration interface, the registration of services is handled either by the service itself or a seperate discovery is run to detect the services.

#### Advantages
* Automatic registration simplifies deployment

#### Disadvantages
* Couples the service to a particular service descovery technology.
