# Mocha

Mocha is a test runner for javascript.

# Usage with Typescript

This is a pain to setup.  While it just _kind of_ works, there are some options in the typescript project file that do not work out of the box.  There are ways around this, but there isn't a comprehensive set of documentation about the options.

## mocha.opts

In a mocha.opts file add the following line, and be sure it is one of the first lines if you have any .ts or .js files to include (and you are transpiling .js).

```
--require ts-node/register
```

One tricky thing, if you are using custom paths at all in say the tsconfig.json file, ts-node doesn't support these.  This requires an additional plugin in your mocha.opts file.  This works for the most part, but one thing I've had issues with are resolution of modules that map to more than one thing.

```
--require tsconfig-paths/register
```


# References

 [Mocha Website](https://mochajs.org/)