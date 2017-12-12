# Tactile gulp

Integrates a basic tactile frontend build process using gulp. The parent project should include gulp as a dependency and have a gulpfile.js with the following:

```javascript
var gulp = require('gulp');
var tactileGulp = require('tactile-gulp');

tactileGulp.runGulp(gulp);
```

This will create the following gulp tasks:
* sass
* sass:watch
* js
* js:watch
* default
    * This included all the previous tasks.

scss and js files under the, "components", "page" and "global" directories are built to the "build" directory and watched for changes.
