# GIT Usage

On many different servers you're given two options to access GIT: using SSH, or using https. Using SSH is the preferred use as once properly set up with a key manager requires no password prompts.

## SSH Access

Use the following to generate an SSH key on the command prompt.  This is similar to using SSH for login to Linux servers.

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

This will generate a key and prompt you for a password, it is important you set one.  Make sure you set it to something strong.  The password will protect your SSH private key from being out in the open on your hard drive.  The password for the SSH key can be kept in your keychain on Mac, or in a key store on Windows to prevent having to type the password every time.  Git on windows also comes with a credential manager that prevents having to use this.

Then you need to configure your SSH public key in you user settings on GitHub/GitLab/etc.  Once this has been added, you should be able to access through SSH.  

You may be required to enter your password to access the SSH key, if so follow the OS specific instructions on how to put the password in the key manager or 

## HTTPS Access

Your other option is https, which may require you to enter your username / password for operations on certian platforms.

Here is the IntelliJ documentation on GIT: https://www.jetbrains.com/help/idea/using-git-integration.html


## Windows

To use Putty here's what you do:

https://www.digitalocean.com/community/tutorials/how-to-use-pageant-to-streamline-ssh-key-authentication-with-putty

To setup git to take keys from pageant:

https://makandracards.com/makandra/1303-how-to-use-git-on-windows-with-putty

It appears IntelliJ uses the same SSH keys as SSH in git bash for it's operations.  Setting up the SSH keys in the GIT bash shell in windows got everything working fine in IntelliJ to commit.

## MacOS

```bash
ssh-add -: ~/.ssh/id_rsa
```

On newer Mac versions, the password for the SSH key does not automatically come from the key chain.  This needs to be updated.

TODO: put a link on how to do that here.