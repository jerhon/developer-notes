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
