environment-safe-package
========================

This normalizes the difference for local inclusion of package.json whether in node or the browser with no build.

Babel will merrily pass this through, while browsers won't. If you want source execution in both environments without build, there is no option. That's where this comes in.

Usage
-----

Using modules
```javascript
import { getPackage } from 'environment-safe-package/src/environment-safe-package.mjs';
(async ()=>{
    const package = await getPackage();
    //do something with the package here
})()
```

Using commonjs
```javascript
const { getPackage } = require('environment-safe-package');
(async ()=>{
    const package = await getPackage();
    //do something with the package here
})();
```

Testing
-------

Run the es module tests to test the root modules
```bash
npm run import-test
```
to run the same test inside the browser:

```bash
npm run browser-test
```
to run the same test headless in chrome:
```bash
npm run headless-browser-test
```

to run the same test inside docker:
```bash
npm run container-test
```


Development
-----------
All work is done in the .mjs files and will be transpiled on commit to commonjs and tested.

If the above tests pass, then attempt a commit which will generate .d.ts files alongside the `src` files and commonjs classes in `dist`

