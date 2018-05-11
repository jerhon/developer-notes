# MongoDB Overview

MongoDB is a document based database system that has gained a lot of popularity.

# Why MongoDB?

* Horizontal architecture
* Cloud ready, hosted MongoDB instances are available and Microsoft's big cloud databases support MongoDB interoperatability (CosmosDB).
* Faster development time for large datasets with a variety of variety of schemas. You can support this in releational DBs, but relational DBs do not 
* Cross platform, and comes as a docker container


# Why not MongoDB?

* Multi-document transactions are not possible.  However, this will be remedied in an upcoming 4.0 release of the software.
* Just because the database doesn't enforce a schema, this doesn't mean that it has no schema.  Every set of data has some schema defining it.  


# Misconceptions

These are things I've heard:

* If you shutdown MongoDB before a write has completed, you may loose your write.  While this can be partially true, a lot of it depends on the options you supply when using the write.
* MongoDB is not scalable or slow.  I don't know where this comes from, but I think with it's adoption rate, it's hard to justify this.