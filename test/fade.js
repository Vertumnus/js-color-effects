/* 
 * Copyright Armin Junge
 */


var assert = require('assert')

// source under test
var ColorEffects = require('../src/effects')

let effects = new ColorEffects(9)


describe('Fade Effect -', function(){
   context('generate:', function(){
      it('has the right colors', function(){
         let expected = [
            [32, 128, 176],
            [35, 127, 174],
            [38, 126, 172],
            [41, 125, 170],
            [44, 124, 168],
            [47, 123, 166],
            [50, 122, 164],
            [53, 121, 162],
            [56, 120, 160]
         ]
         assert.deepEqual(effects.fade('#2080b0', 'rgb(56, 120, 160)'), expected, 'colors are wrong')
      })
   })
})