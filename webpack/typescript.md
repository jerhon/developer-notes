# Typings for Stylesheets

```
 { test: /\.css$/, loader: ['style-loader', {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true
                }
              }] 
},
{ test: /\.scss$/, use: [ 
    {
        loader: 'typings-for-css-modules-loader',
        options: {
        modules: true,
        namedExport: true,
        camelcase: true,
        }, 
    },
    { loader: 'sass-loader' }]
},
```