## sp-flowchart-js

Makes flowchart.js features available to SharePoint users

### Building the code

```bash
git clone https://github.com/Haddley/sp-flowchart-js.git
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean

gulp test

gulp serve

gulp bundle

gulp package-solution

