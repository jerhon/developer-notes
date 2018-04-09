# Docker Overview

Docker is a technology to create and run containers.  A container is a image that when executed run within an isolated system on the machine.  Each image is comprised of several layers which are built upon each other which when stacked result in a running application.

## Why Docker?

### Docker allows you to bundle all your dependencies.  

If you can run your docker container on one instance of docker, it should be able to run on any docker instance of the same platform.

### Docker simplifies dependency issues.

Since all dependencies are included with the package, you don't have to worry about odd dependencies such as a library being updated by another application.

### Docker allows you to run your application in a standardized way.  

Docker containers are all executed the same way with the run command.

### Docker simplifies sharing your applications.

Docker images are easily made available through docker registries.  This makes it easier to find and use applications.

### Docker makes it easier to move to the cloud.

Many cloud services provide the ability to run docker containers.  Depending on the service, this can be much easier than having to provision an entire VM.

## Why not docker?

### Initially it can be complex.
It takes some time to learn the intricacies of docker.

### Poor Windows Server support.

Windows server allows running windows containers.  Newer versions of windows server allow both Windows and Linux containers side by side.  However, this support is still in the experimental stages, in short term releases, or beta releases.  Microsoft is moving forward with better support, but it will take until Windows Server 2019 before that is available.

### Limited Adoption

Since many not yet adopted docker, it requires them to learn a new skill set.  While the application developer may learn about this technology, those in on the IT operations side would also need additional training in the administration of Docker.