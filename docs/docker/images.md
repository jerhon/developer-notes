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

# Pushing Docker Images

A docker image can be pushed to a repository.  This makes it available for others to access it and download it for use.  This requires an image to already be tagged with the repository's name.  Once it's tagged with the repository name, the image can be pushed with the push command.

```
docker push repository/image-name
```

# Pulling Docker Images

Pulling a docker image downloads and stores an image locally from a remote repository.  While this operation will be done with the run command below if needed, pulling the image first can save time for the initial execution.  This is particularly useful for large images.  For example, the base windows OS docker images can be many GBs.  By fetching those images ahead of time, a new instance of the image can be started faster when it's created.

# Docker Image Repositories

Docker images are stored in repositories.  These provide a centralized place to download and manage images.  The most common registry to use is dockerhub.  It provides a cloud based location to find and 

# Cleaning up old images

A lot of time after running docker for a while, you'll have images that have accumulated that you no longer use.  These don't automatically get deleted, but you can manually clean them up with the prune command.

```
docker images prune
```

This will remove any "dangling" images that are no longer being used.
