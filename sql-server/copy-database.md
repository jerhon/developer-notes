# Copy a Database

The task to copy a database in Microsoft SQL Management Studio is notoriously buggy.  I often get object reference errors, issues with permissions in SQL Agent, etc.  If you can get everything set up just right, sometimes it will work.  However, the benefits of using SQL Agent in scenarios when you have access to the server and can do the same thing in a few steps is minor.

# Detach, Copy, Attach Method

Using this method, we detach a database, copy it, and attach the old database and the new database.

```SQL
USE [master]
GO
ALTER DATABASE [<DB_NAME_HERE>] SET  SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
USE [master]
GO
EXEC master.dbo.sp_detach_db @dbname = N'<DB_NAME_HERE>'
```

Go to the filesystem where it is stored, and copy it with a new name.  If it is the default location it would be in a directory similar to this depending on the version of SQL server.

```
C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA
```

Now with the new file name, do this for both the original, and new files.  Replace <DB_FILE_NAME_HERE> with the filenames for the database, and <DB_NAME_HERE> with the name of the new database.

You will have to do this twice, one time for the original database, and one time for the new database.

```SQL
USE [master]
GO
CREATE DATABASE [<DB_NAME_HERE>] ON 
( FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\<DB_FILE_NAME_HERE>.mdf' ),
( FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\<DB_FILE_NAME_HERE>.ldf' )
 FOR ATTACH
GO
```
## Questions
### Why do I need to detatch/reattach the original?

This is done so the DB is in a well known state prior to be copied to a new instance.  If the DB is some state writing to the DB, or TX log, it's possible to miss transactions in the new DB so you'll actually get an old version of the DB.  Thus it's better to take the database down to get an exact copy.