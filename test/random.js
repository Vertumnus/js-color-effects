/* 
 * Copyright Armin Junge
 */


var assert = require('assert')

// source under test
var ColorEffects = require('../src/effects')

let effects = new ColorEffects(16)


describe('Random Effect -', function(){
   context('generate:', function(){
      let mix
      it('has 16 colors', function(){
         let unexpected = [
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]
         ]
         mix = effects.random()
         assert.notDeepEqual(mix, unexpected, 'no colors were generated')
      })
      it('has different colors as before', function(){
         assert.notDeepEqual(effects.random(), mix, 'regeneration of random not successful')
      })
   })
})