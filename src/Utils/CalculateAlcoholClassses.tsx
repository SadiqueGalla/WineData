import Properties from "../Types/Properties";


/**
 * Find the classes from the properties data
 * @param  {Properties[]} properties The properties data
 * @return {number[]}      Array of classes
 */
function calculateAlcoholClassses(properties:Properties[]):number[] { 
    const names:number[] = properties.map((item) => item.Alcohol);
    const uniqueNamesSet = new Set(names);
    const uniqueClasses = Array.from(uniqueNamesSet);
    return uniqueClasses
  }

  export default calculateAlcoholClassses