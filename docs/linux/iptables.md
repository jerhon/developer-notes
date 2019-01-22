# IP Tables

IP tables is a service to configure netfilter.  It can be used as a way to filter traffic going in and out of a linux PC.  It's most common usage is as a firewall.

## Cheatsheet: iptables

A set of commands to use with iptables.

|Command|Description|
|--|--|
|iptables -L |List all iptables rules. |
|iptables -N CHAIN_NAME | Create a new IPtables chain |
|iptables -A INPUT -j CHAIN_NAME| Links data to the new chain |
|iptables -A INPUT -s IP_GOES_HERE/32 -p tcp -m tcp --dport PORT_GOES_HERE -m comment --comment "accepting a specific port from a specific IP" -j ACCEPT| Add a specific port from a specific IP.  Note the comment block to add a comment so it's easy to understand the rue.|

### Common IP Tables Flags

The first flag typically denotes what the rest of the command will do.

* -A = Append a new rule to the end of the chain
* -L = List rules
 
## Saving and restoring IP tables rules

There are two helper commands which can be used to take a snapshot of the current iptables and restore them. ```iptables-save``` and ```iptables-restore```.

```bash
iptables-save > iptables-commands.txt
```

Likewise the iptables-restore command can be used to load the commands and restore them.

```bash
iptables-restore < iptables-commands.txt
```

## Rules Persistence

Care needs to be taken adding iptables rules to ensure they persist across reboots.  Certain distributions have no provisions to do this automatically.

When modifying your iptables rules, a good way to handle it is to:
1. Add a rule
2. Ensure the rule works properly for some time
3. Persist the rule

This helps in the case that you accidentally provision a rule that would lock you out of the machine, even though that is pretty unlikely.  If you did,  reboot the machine to start over.

### CentOS

This preserves the iptables in CentOS on reboot.

```
iptables-save > /etc/sysconfig/iptables
```

### Ubuntu

This preserves the iptables in Ubuntu

```
iptables-save > /etc/iptables/rules.v4
```


## Installation

TBD