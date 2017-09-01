/* 
 * Copyright Armin Junge
 */

var colorLib = require('color')

/**
 * @typedef {Array.<Number>} colorArray Array of color
 */
/**
 * @typedef {Array.<colorArray>} pixelArray Array of colors for pixels
 */


/**
 * Color Effects class
 * Each effect method returns an array for the given number of pixels.
 * Each element of this array is itself an array with rgb color code ([r, g, b]).
 */
class ColorEffects{
   /**
    * Creates an instance of Color Effects
    * @param {Number} pixel - Number of pixels
    * @returns {ColorEffects}
    */
   constructor(pixel){
      this.pixelCount = pixel
   }
   
   /**
    * Generates rainbow colors
    * @param {Boolean} reverse - makes the rainbow in reverse direction
    * @returns {pixelArray}
    */
   rainbow(reverse){
      let way = 1280 // 5 turns * 256 color spectrum
      // calculate step depending on number of pixel
      let step = Math.floor( way / ( this.pixelCount - 1 ) )
      
      let result = []
      
      for(let position = -1; position <= way; position += step)
         result.push(this._getRainbowColorFrom(position))

      if(reverse)
         result.reverse()
      
      return result
   }
   
   /**
    * Determines the color depending on the position in the rainbow
    * @private
    * @param {Number} position
    * @returns {Array}
    */
   _getRainbowColorFrom(position){
      let diff = position % 256
      if(position < 0)
         return [255, 0, 0]
      if(position < 256)
         return [255, diff, 0]
      if(position < 512)
         return [255 - diff, 255, 0]
      if(position < 768)
         return [0, 255, diff]
      if(position < 1024)
         return [0, 255 - diff, 255]
      return [diff, 0, 255]
   }
   
   /**
    * Generates the fading from one color to another
    * @param {(String|Array)} from - Color starting the fading from 
    * @param {(String|Array)} to - Color ending the fading to 
    * @returns {pixelArray} 
    */
   fade(from, to){
      let fromR, fromG, fromB
      [fromR, fromG, fromB] = colorLib(from).array()
      let toR, toG, toB
      [toR, toG, toB] = colorLib(to).array()
      let diffR = (toR - fromR) / (this.pixelCount - 1)
      let diffG = (toG - fromG) / (this.pixelCount - 1)
      let diffB = (toB - fromB) / (this.pixelCount - 1)
      
      let result = []
      
      for(let light = 0; light < this.pixelCount; ++light, fromR += diffR, fromG += diffG, fromB += diffB)
         result.push([Math.round(fromR), Math.round(fromG), Math.round(fromB)])
      
      return result
   }
   
   /**
    * Generates random colors
    * @returns {pixelArray}
    */
   random(){
      let result = []
      let steps = this.pixelCount
      while(steps--)
         result.push([this._getRandomColorValue(), this._getRandomColorValue(), this._getRandomColorValue()])
      
      return result
   }
   
   /**
    * Generates a random color value
    * @private
    * @returns {Number}
    */
   _getRandomColorValue(){
      return Math.floor(Math.random()*256)
   }
}

module.exports = ColorEffects