# Windows Server Initial Setup

Some basic commands to get Windows Server off the ground running from the commandline.  I last used this against Windows Server 2016.

# Initial Configuration Steps

## Rename Your Server
Rename the computer to be whatever you want it to be rather than the genric made up name by Microsoft.  If you have a domain, you should have a naming convention for your machines.

```
Rename-Computer -NewName "computernamehere"
```


## Join the Domain
After booting, have the server join the domain through powershell.

```
Add-Computer -DomainName 'toms.local' -Credential Get-Credential -Restart
```


## Add an Administrator from the domain
Add a domain account as an Administrator
```
Add-LocalGroupMember -Group Administrators -Membmer DOMAIN\user
```


## Install Updates
Install updates.  This needs to be done prior to running docker
```
sconfig  
6
A
```

# Docker Setup

## Install Docker
Install Docker:

https://docs.docker.com/install/windows/docker-ee/

These two commands should do it

```
Install-Module DockerMsftProvider -Force
Install-Package Docker -ProviderName DockerMsftProvider -Force
```

### Configure Docker
If you have any custom configuration options for docker, do it through the config file. Add "C:\programdata\docker\config\daemon.json" with any settings. Typically I'll have one or more insecure registries set up.
```
{"insecure-registries":[]}
```
