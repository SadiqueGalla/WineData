



/**
 * Find mode of array of numbers
 * @param  {Number} arr The array for which mode has to be calculated
 * @return {String}      Mode of the array to 3 decimals
 */
function CalculateMode(arr: number[]): string {
    const frequencyMap: { [key: number]: number } = {};
    
    // Calculate the frequency of each number
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    let mode: number=arr[0]?arr[0]:0;
    let maxFrequency = 0;
  
    // Find the number with the highest frequency (mode)
    for (const num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mode = Number(num);
      }
    }
  
    return mode.toFixed(3)


}

export default CalculateMode