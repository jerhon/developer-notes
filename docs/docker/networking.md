# Docker Networking


## Interaction with IP Tables

Docker always injects it's rules at the top of the iptables FORWARD chain.  To override rules, the DOCKER-USER chain is created, it is not modified by docker ever.
