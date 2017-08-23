# exists-promise

Check if a file exists with a Promise.

## Example

```js
import exists from 'exists-promise';

exists('./path/to/something')
  .then(path => { console.log(`path exists! ${path}`); })
  .catch(console.error);
```
