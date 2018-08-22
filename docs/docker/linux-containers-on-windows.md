# Linux Containers on Windows

This technology allows docker containers to run side by side with windows containers.  For executing simple containers, first switch to "Windows Containers" via the Docker icon.

In the Daemon settings, enable experimental features.  This will enable LCOW support.

The existing Docker VM will continue to run, but you should be able to start and run Linux containers even though you are switched to "Windows Containers".

To enable containers in Windows, you will need to need to turn on a few windows feature.

Via a powershell commandline, you can do it like so:

```
Enable-WindowsOptionalFeature -Online -FeatureName containers -All
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

## Why is this important?

Previous versions of docker only allowed you to run linux containers or windows containers, but not both together.  With the abililty to run them at the same time, it simplifies management of docker images and allows you to do more complex deployments if you have some services that are running in windows and some in linux.

# Specifying the Container Platform

In previous versions of docker it was required to specify the platform for the image with a flag such as "--platform linux".  However, in recent releases, this no longer seems to be the case.  

https://blog.docker.com/2017/09/docker-official-images-now-multi-platform/

In short, the build command now is aware of platforms, and the images it produces now identify which platforms they run on.  Additionally, many of the base images in the docker repository now have be tagged with their respective platforms.

# TODO(s)
* Why is the linux VM still available?  Is it possible to delete this when using LCOW?
* Does this work with docker compose?
* Talk about advancements in Windows Server 2019 and the semi-annual release channel.