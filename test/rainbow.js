/* 
 * Copyright Armin Junge
 */


var assert = require('assert')

// source under test
var ColorEffects = require('../src/effects')

let effects = new ColorEffects(6)


describe('Rainbow Effect -', function(){
   context('generate:', function(){
      it('has correct colors', function(){
         let expected = [
            [255, 0, 0],
            [255, 255, 0],
            [0, 255, 0],
            [0, 255, 255],
            [0, 0, 255],
            [255, 0, 255]
         ]
         assert.deepEqual(effects.rainbow(), expected, 'colors are wrong filled')
      })
   })
   context('generate reverse:', function(){
      it('has correct colors reversed', function(){
         let expected = [
            [255, 0, 255],
            [0, 0, 255],
            [0, 255, 255],
            [0, 255, 0],
            [255, 255, 0],
            [255, 0, 0]
         ]
         assert.deepEqual(effects.rainbow(true), expected, 'colors are wrong filled')
      })
   })
})