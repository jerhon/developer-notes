# Service Management

Services are typically managed via a "services" script or systemctl.

```systemctl``` has some bizarre command line options for searching.

## systemctl Cheat Sheet

|Command  |Description|
|-        |-             |
|systemctl|Brief list of services|
|systemctl status SERVICE|Status of a specific service|
|systemctl restart SERVICE|Restart a service|
|systemctl enable /path/to/unit.service|Installs a service that will be run on startup.|

## Add a Service to Linux

Here's a simple file to register a service on Linux.  This file would register a service for stunnel. 

One thing to keep in mind when running systemctl enable use the full path to the service, don't manually link it in the systemd path yourself.

```
[Unit]
Description=SSL tunnel daemon
After=network.target
After=syslog.target

[Service]
ExecStartPre=-/usr/bin/mkdir /var/run/stunnel
ExecStart=/usr/bin/stunnel /etc/stunnel/stunnel.conf
ExecStop=/bin/kill -9 ${pgrep stunnel}
PIDFile=/var/run/stunnel/stunnel.pid
Type=forking

[Install]
WantedBy=multi-user.target
```