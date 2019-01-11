# Razor (cshtml)

Razor is a View engine for creating server side web pages with ASP.Net MVC.
Razor features a syntax that allows C# code as a templating engine for creating HTML pages.


## Directives

### @inject
Injects an object from the DI container into the Razor view.
Once injected it can be used as a variable throughout the rest of the view.

````Razor
@inject IOptions<ConfigurationOptions> Config
````

## Special Pages

### _ViewImports.cshtml

This contains a list of common namespace imports used throughout the rest of the views.
