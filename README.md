# Color Effects

[![Coverage Status](https://coveralls.io/repos/github/Vertumnus/js-color-effects/badge.svg?branch=master)](https://coveralls.io/github/Vertumnus/js-color-effects?branch=master)
[![npm](https://img.shields.io/npm/dt/color-effects.svg)](https://www.npmjs.com/package/color-effects)
[![npm](https://img.shields.io/npm/v/color-effects.svg)](https://www.npmjs.com/package/color-effects)
[![npm](https://img.shields.io/npm/l/color-effects.svg)](https://www.npmjs.com/package/color-effects)

This library contains a javascript class. The class provides several color effect 
generations and provides always an array with colors, whereby the color itself is an 
array containing a red, green and blue value.

## Precondition
The library is implemented in ECMAScript 2015, so your project should support
at least this version.

## Installation
Install it via npm:
```shell
$ npm install color-effects
```

## Usage
Start with importing the module via:
```js
var ColorEffects = require('color-effects')
```

Create an instance providing the number of pixels (lights, leds). This will be 
the number of colors in the returned array of each effect method.
```js
// 32 pixels
var effects = new ColorEffects(32)
```

### Supported Effects
#### Rainbow
Generate a rainbow:
```js
// generated array starts with red and ends with violet
var rainbow = effects.rainbow()
// reversed rainbow (from violet to red)
var rainbowReverse = effects.rainbow(true)
```

#### Fade
Generate a color gradient from a color to another color:
```js
// from red to blue
var colors = effects.fade('#ff0000', 'rgb(0, 0, 255)')
```

#### Random
Generate a collection of random colors:
```js
var chaos = effects.random()
```

## API
Check out the [documentation](doc) for details.

## License
MIT