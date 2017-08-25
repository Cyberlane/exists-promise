[![Version](http://img.shields.io/npm/v/exists-promise.svg)](https://www.npmjs.org/package/exists-promise)
[![npm](https://img.shields.io/npm/dt/exists-promise.svg)](Downloads)

# exists-promise

Check if a file exists with a Promise.

## Example

```js
import exists from 'exists-promise';

exists('./path/to/something')
  .then(path => { console.log(`path exists! ${path}`); })
  .catch(console.error);
```
