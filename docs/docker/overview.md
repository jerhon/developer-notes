# Docker Overview

Docker is a technology to create and run containers.  A container is a image that when executed run within an isolated environment in the OS.  Each image is comprised of several layers which are built upon each other which when stacked result in a running application.






# Repositories

A docker repository is a place were images of an application can be stored in order to later retrieve and run them from other hosts.  A repository can be set up on any machine running docker.

# Options for Hosting

## Dockerhub
This is a hosted service for saving and distributing container images.





## Why Docker?

### Docker allows you to bundle all your dependencies.  

If you can run your docker container on one instance of docker, it should be able to run on any docker instance of the same processor platform.  Running it on additional processor platforms may depend on how you

### Docker simplifies dependency issues.

Since all dependencies are included with the package, you don't have to worry about odd dependencies such as a library being updated by another application.

### Docker allows you to run your application in a standardized way.  

Docker containers are all executed the same way with the run command, and can have management interfaces installed to manage them.  Building an application docker container allows you to distribute it to many different environments such as competeing cloud vendors, or internal environments vs external environments.

### Docker simplifies sharing your applications.

Docker images are easily made available through docker registries.  Once an imaged is pushed, it's a simple command to pull an image and run it locally.

### Docker makes it easier to move to the cloud.

Many cloud services provide the ability to run docker containers.  Depending on the service, this can be simplier than having to provision an entire VM.

## Why not docker?

### Initially it can be complex.
It takes some time to learn the intricacies of docker.

### Poor Windows Server Support.

Windows server allows running windows containers.  Newer versions of windows server allow both Windows and Linux containers side by side.  However, this support is still in the experimental stages, in short term releases, or beta releases.  Microsoft is moving forward with better support, but it will take until Windows Server 2019 before that is available.

### Limited Adoption

Since many have not yet adopted docker, it requires them to learn a new skill set.  While the application developer may learn about this technology, those in on the IT operations side would also need additional training in the administration of Docker.

### Not for desktop

If you wish to build a containerized desktop application, Snaps are the format for you in Linux.  In windows there really isn't a good way to do this currently.