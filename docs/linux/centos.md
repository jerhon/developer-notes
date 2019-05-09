# CentOS

Information on managing CentOS servers.


## Adding Certificates as Trusted

Certificates go in 
````path
/etc/pki/ca-trust/source/anchors/
````

Then run this command to apply them
````bash
update-ca-trust extract
````


## Installing GIT

Git does not build a package for CentOS / RHEL.  Wandisco has a repo with prebuilt images.

https://linuxize.com/post/how-to-install-git-on-centos-7/


## Using IP Tables

IP tables is not installed as a service immediately, use yum install iptables-services in order to get it set up.  This will load a saved configuration from /ect/sysconfig/iptables on startup.