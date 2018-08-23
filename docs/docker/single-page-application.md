# Single Page Application Overview

This is a basic of some of the settings required to get a single page application to work with nginx hosting a web service and having a separate container with the APIs where the nginx container acts as a gateway for the APIs.

# Web Page

I assume the web page is a modern statically built single page application.  In that case, a new container will be built of the nginx base container which contains the files.


Typically when I build an nginx single page container, I will generate a new container copying in the new files and supplying a new nginx configuration.  One difficult portion to this is environment variable substitution in the nginx configuration especially if you have to route your API calls to a seperate server.


## Sample nginx.conf
```nginx

```

## Sample shell file to run
```bash
```

## Sample Dockerfile
```dockerfile
```