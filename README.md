#

This package provides a ```getAverageColor``` function with syntax like ```getAverageColour(img, type, inv)```, where ```img``` is youre ```<img>``` element, ```type``` is type of color model you choose (```'RGB'``` or ```'HEX'```), ```inv``` — optional parameter (if you write ```true``` your color will be inverted) and returns css-readable color.

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