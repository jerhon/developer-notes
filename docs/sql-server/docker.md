# SQL Server in Docker

The latest versions of SQL server can be run in docker.  

This enables a quick spin up of a database server for development, CI, or CD processes where a traditional server installed SQL Server instance may not be available.


## Docker Compose

Here's a small example of a docker compose for SQL Server.  

````yaml
version: "3.2"
services:
  sqlserver:
    image: mcr.microsoft.com/mssql/server
    environment:
      ACCEPT_EULA: Y
      # replace your SA password if you wish to have this visible externally
      SA_PASSWORD: <YOUR_PASSWORD_HERE>
      # This is the default 
      MSSQL_PID: Developer
    # Can't bind directly to /var/opt/mssql on Mac
    volumes:
      - type: bind
        source: ./data
        target: /var/opt/dbs/
    ports:
      - "1433:1433"
````


## Gotchas

### Unable to open the physical file

```
Unable to open the physical file "XYZ". Operating system error 87: "87(The parameter is incorrect.)".
```

If you're in docker make sure the file is attached from /var/opt/mssql/

### MacOS

Due to some odd way SQL Server uses the file system and Docker for Mac, it can't bind to the /var/opt/mssql directory, bind to an alternate directory and do a docker exec once the container is running.  Or, create your own docker container with the database files.
