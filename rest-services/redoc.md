# Redoc

Redoc is a tool to generate documentation from a swaggerfile.

https://www.npmjs.com/package/redoc
https://github.com/Rebilly/ReDoc/blob/master/cli/README.md

The main benefits of this over other tools is it bundles all the documentation into a single HTML file.  It also supports the latest swagger specification(s).  It also supports $ref tags, or at least in most places I've tried to use them.

## Usage

Build a static page
```
redoc-cli bundle swagger.json
```

This will output a file redoc-static.html which contains the documentation for the API in the swagger.json file.
