# Logging

There are a number of good logging libraries available for .NET.  In the past I had exclusively used log4net for many years.  It worked, but development has since grown stale on it and the .NET platform has rapidly advanced.  It's important to stay on something well tested and yet able to advance itself with change, thus I usually pick NLog for new projects.  NLog also has a few contributors that have taken on the project over time even though the primary contributor is no longer involved.

.NET Core has extensions for logging.  These work, but it misses some of the more advanced features of well established loggers.  Fortunately, Microsoft has put in extension points so that the framework can be used to log to other logging platforms.

## NLog

NLog has been around for some time, and the amount of functionality in NLog has increased since.  It is well maintained, and the source code is still under active development.  It also contains simple integration for ASP.Net.  

For new projects, this is what I would suggest.

### Configuring NLog

NLog can be configured via an XML file.  This is a sample file that would log to console in a colored two line format.

```xml
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      autoReload="true"
      internalLogLevel="info">

  <!-- enable asp.net core layout renderers -->
  <extensions>
    <add assembly="NLog.Web.AspNetCore"/>
  </extensions>

  <targets>
    <target xsi:type="ColoredConsole" 
      name="ConsoleLogger"
      useDefaultRowHighlightingRules="False"
      layout="${time} [ ${level:uppercase=true} ] ${logger}${newline}    ${message}${onexception:${newline}    ${exception}}">

      <highlight-word foregroundColor="Red" text="ERROR" />
      <highlight-word foregroundColor="White" text="INFO" />
      <highlight-word foregroundColor="Yellow" text="WARN" />
    </target>
  </targets>
  
  <rules>
    <!-- Trace will log a lot of detail, thus only use this in debugging / development. -->
    <logger name="*" minlevel="Trace" writeTo="ConsoleLogger" />
  </rules>
</nlog>
```

## Configuring for ASP.Net Core

This will configure an ASP.Net application to log with NLog.  When creating the default builder use the following:

```c#
.ConfigureLogging((log) => {
    log.ClearProviders();
    log.SetMinimumLevel
    (Microsoft.Extensions.Logging.LogLevel.Trace);
})
.UseNLog()
```


In your main code, NLog will need to be started prior to setting up ASP.Net core.

```c#
public void Run(string[] args) {

    var logger = NLog.Web.NLogBuilder.ConfigureNLog(this.NLogConfigPath).GetLogger(typeof(Program).FullName);
    try {
        logger.Debug("Starting application");
        CreateWebHostBuilder(args).Build().Run();
    }
    catch (Exception ex) {
        logger.Error(ex, "Unexpected exception starting application.");
    }
    finally {
        NLog.LogManager.Shutdown();
    }
}
```
