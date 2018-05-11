# Shell Cheat Sheet

These are several common commands used in the mongo shell.

# Common

## Switch the Database

Switch the database in the MongoDB shell.  It's very non-javascript.

```
use db-name
```

# Query

## Simple Query
```javascript
db.getCollection('collectionname').find({column:'value'});
```

## Query with sort order

```javascript
db.getCollection('collectionname').find({column:'some value'}).sort({name: 1});
```

# Delete

## Remove all entries from a collection.

```javascript
db.getCollection('collectionname').remove({});
```

## Remove a specific entry from a collection

```javascript
db.getCollection('collectionname').remove({id: 'id'});
```