environment-safe-package
========================

This normalizes the difference for local inclusion of package.json whether in node or the browser with no build.

While babel will merrily pass this through browsers won't, so if you want source execution in both environments without build, there is no option. That's where this comes in.

Usage
-----

```javascript
import { getPackage } from 'environment-safe-package';
(async ()=>{
    const package = await getPackage();
    //do something with the package here
})()
```