
/**
 * Find mean of array of numbers
 * @param  {Number} arr The array for which mean has to be calculated
 * @return {String}      Mean of the array to 3 decimals
 */
function CalculateMean(arr: number[]): string {


  return (arr.reduce((sum, value) => sum + value, 0) / arr.length).toFixed(3);

}

export default CalculateMean