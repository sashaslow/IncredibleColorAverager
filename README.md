#

This package provides a ```getAverageColor``` function returns css-readable color with syntax like ```getAverageColour(img, type, inv)```, where ```img``` is youre ```<img>``` HTMLElement, ```type``` is type of color model you choose (```'RGB'``` or ```'HEX'```), ```inv``` — optional parameter (set to ```true``` if you want an inverted resulting value).

# Install

```shell
$ npm install incredible-color-averager --save
```
# Usage

```javascript
const getAverageColour = require('incredible-color-averager')
// ES2015 modules
import getAverageColour from 'incredible-color-averager'

const img = document.querySelector('img')

const rgbColor = getAverageColour(img, "RGB")

console.log(rgbColor)
/// rgb(255, 255, 255)

const invertHexColor = getAverageColour(img, "HEX", true)

console.log(invertHexColor)
/// #000000
```
# License

MIT