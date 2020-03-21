# Integration


## Techniques

### Batch / ETL

Highly coupled to the problem at hand.  Two systems, migrate data from one system to another.

#### Synchronization

Set A to Set B

* Create all in Set B that do not exist but are in Set A
* Update those that exist in Set A & Set B 
* Delete those from Set B that no longer exist in Set A but are in Set B

### Event / Message / Stream Based

Business events are generated and put in a stream.  This is often used in conjunction with an API.

### API



