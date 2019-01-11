# TLS

## Check a Website Certificate

When misconfigured, this is an easy way to show the configured cert and make sure it works properly.

```bash
openssl s_client -showcerts -connect www.example.com:443 < /dev/null
```

