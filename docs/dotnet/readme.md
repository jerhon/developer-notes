# Overview

Microsoft .NET has been around for many years and seen may leaps and bounds since it's introduction.  It's Microsoft's defacto platform for building software and applications.


# .NET Framework vs .NET Core

In the early days of .NET to build an application you would use the .NET framework and pick a language of your choice.  In recent years Microsoft has shifted focus to .NET Core and .NET Standard.  These can get somewhat confusing early on, but really what you use depends on what you plan to build.

.NET Framework is Microsoft's first implementation of .NET and was only available on Windows.


.NET Core is Microsoft's new implementation of .NET.  While it reuses some bits and pieces of .NET framework, overall, it is different.  It has platform independence, as in you can run your application on Windows, Linux, MacOS, etc.  

.NET Framework currently is installed along with many recent versions of windows.  It is currently the platform used to build UI type applications, and many older applications still use this.

.NET Standard is a specification of programming interfaces .NET Core and .NET Framework must adhere too.  This gives application developers the ability to write a .NET library targeting .NET Standard so it can run on either the .NET Framework or .NET Core.  Different versions of the two technologies implement different versions of .NET Standard.

# Getting Started

The easiest way to build a .NET application is via creating a project or solution in Visual Studio.  This has always been the case.  

However, for us power users out there, with .NET core there is a new command line utility (dotnet) that allows us to create these solutions from the commandline. 

## Get a List of Templates

The following command will give you a list of templates for .NET projects.  Think of this like Visual Studio's project wizard on the commandline.

```
dotnet new
```

## Create a New Project

``` 
dotnet new console
```
