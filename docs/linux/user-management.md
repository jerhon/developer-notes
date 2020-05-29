# User Management

These are basic user management commands in Linux.
Obviously, you'll have to sudo a lot of these.


## Add User

Pretty straight forward, no options required.  However, it creates a group for the user if you don't use any options.

```bash
useradd <username>
```

If you have a default users group, make sure to change the primary group for the user otherwise one will be created by default.

```bash
useradd -g <groupname> <username>
```

## Set User's Password

To allow the person to login, you must set a password for them.

```bash
passwd <username>
```


## Add user to group
* wheel = similar administrator in linux world the user has access to sudo
* docker = the group to manage docker and containers

```bash
usermod -a -G wheel <username>
```

## Delete a group

```bash
groupdel <groupname>
```


## Add ssh public key 

You can make someone set this up on their own, but this avoid them having to type passwords on initial login.
I like to set up SSH keys for every server I'm on.
That way if any server asks for my password, I know it's a phishing attempt.

Either run these commands, or if you don't want to do all the "chown" stuff, su to the user first to create the files.

```bash
mkdir <userroot>/.ssh
echo "<pubkey here>" > <userroot>/.ssh/authorized_keys
chown <user>:<group> <userroot>/.ssh
chown <user>:<group> <userroot>/.ssh/authorized_keys
chmod oq-rwx -R <userroot>/.ssh
```

## List current users

There is no convenient command line for this I know of. Look at ```/etc/passwd```

## List current groups

There is no convenient command line for this I know of. ```Look at /etc/group```
