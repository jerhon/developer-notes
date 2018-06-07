# Building Docker Images

Building a docker image requires creating a Dockerfile which describes how the image is to be built and the commands required in order to run the image.

```
docker build -t application-name .
```

Typically each image is tagged with one or more tags.  The tags can be used to describe the image.  They are also used to denote a repository the images can pushed to.

```
docker build -t myrepository:port/application-name .
```

When Dockerfiles are structured, they usually are built with a base image.  Additional layers are stacked on top of that base image by running commands in the Docker file.  For example, copying new files into an image would create an additional layer in which those files are stored. This makes storage of containers very efficient.  

For example, let's say you made two different applications that rely on a base image that provides Node.js.  If you distribute the application as a docker container and rely on the same base image for Node.js, the applications could rely on that same base image with their specific code layered on top.

## Sample Dockerfile

This is a sample dockerfile which can be used to build a Node.js application.

```Dockerfile
TODO: add it here
```
