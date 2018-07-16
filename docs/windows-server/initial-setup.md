# Windows Server Initial Setup

Some basic commands to get Windows Server off the ground running from the command line.  I last used this against Windows Server 2016.  I wanted to learn the powershell commands so that I didn't have to manually use the GUI.

# Initial Configuration Steps

## Rename the Server
Rename the computer to be whatever you want it to be rather than the generic made up name by Microsoft.  If you have a domain, you should have a naming convention for your machines.

```powershell
Rename-Computer -NewName "computernamehere"
```


## Join the Domain
After booting, have the server join the domain through powershell.

```powershell
Add-Computer -DomainName 'toms.local' -Credential Get-Credential -Restart
```


## Add a Domain User as Administrator
Add a domain account as an Administrator
```powershell
Add-LocalGroupMember -Group Administrators -Membmer DOMAIN\user
```


## Install Updates
Install updates.  This needs to be done prior to running docker
```powsershell
sconfig  
# 6 - install updates
# A - install all updates
```

## Add Firewall Exceptions

For example, this would add an exception to allow traffic for port 80.
```powershell
New-NetFirewallRule -Name "HTTP" -DisplayName "HTTP" -Enabled 1 -Action Allow -LocalPort 80 -Protocol TCP
```

# Docker Setup

## Install Docker
Install Docker:

https://docs.docker.com/install/windows/docker-ee/

These commands should do it:

```powershell
Install-Module DockerMsftProvider -Force
Install-Package Docker -ProviderName DockerMsftProvider -Force
Start-Service Docker
```

## Configure Docker
If you have any custom configuration options for docker, do it through the config file. Add "C:\programdata\docker\config\daemon.json" with any settings. Typically I'll have one or more insecure registries set up.
```json
{ "insecure-registries": [] }
```
