# Entity Framework Core

Entity Framework Core is the new version of Microsoft's Entity Framework tooling.
Entity Framework Core is the suggested database access technology for Microsoft SQL Server in .NET.

## History
After version 6.0 of the Entity Framework, it was re-written to support the .NET Core framework.
While this re-write maintained some compatibility, in practice changes are typically needed to fix the application.

The most problematic areas I found during conversion of a project
* No EDMX support
* No Many-to-Many relationship support


## Getting Started

### Scaffold an Existing Database

This takes an existing database and generates a class model for the tables in that database.

```bash
dotnet ef dbcontext scaffold "Data Source=MyDbServer;Initial Catalog=MyDb;User ID=Happy;Password=Happy;" Microsoft.EntityFrameworkCore.SqlServer
```