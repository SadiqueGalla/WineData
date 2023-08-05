
/**
 * Find median of array of numbers
 * @param  {Number} arr The array for which median has to be calculated
 * @return {String}      Median of the array to 3 decimals
 */
function CalculateMedian(arr:number[]):string {
     
   //Sort the array
    const arraySorted = arr.sort();
    const median=arraySorted.length % 2 === 0
    ? (arraySorted[arraySorted.length / 2 - 1] +
            arraySorted[arraySorted.length / 2]) /
            2
    : arraySorted[Math.floor(arraySorted.length / 2)];
    return median.toFixed(3);
  }

  export default CalculateMedian