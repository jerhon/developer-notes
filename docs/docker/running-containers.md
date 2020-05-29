# Running Images

In Docker, an image can be run within a container.  The most basic way to run an image is to use the `docker run` command.


## Port Binding

Docker by default binds to all interfaces.  When supplying a binding parameter it's best to stick to localhost if you are testing something locally and don't want to expose it.  

This is an example to run a popular ActiveMQ image.

```
docker run -p 127.0.0.1:61616:61616 -p 127.0.0.1:8161:8161 -it --name=activemq rmohr/activemq
```

When more complicated hosting is needed in docker, private networks can be set up in order to allow networking between different containers.

## Updating a Running Container

This would reset the restart policy for a container.  The other options for this command are for setting resource allocations for CPU,memory, IO, etc...

```
docker update <CONTAINERNAME> --restart no
```

Other restart policies
* on-failure
* unless-stopped
* always
