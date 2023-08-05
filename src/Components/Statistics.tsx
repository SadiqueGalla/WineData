import Properties from "../Types/Properties"
import CalculateMode from "../Utils/CalculateMode";
import CalculateMean from "../Utils/CalculatMean";
import CalculateMedian from "../Utils/CalculatMedian";
import Table from "./Table";
import React from 'react';

/**
 * Utility component to calculate and show mean,median and mode of any property from the dataset
 * @param  {Properties[]} properties The dataset
 * @param {number[]}      classes Array of classes
 * @param {string} propertyName Property for which the statistics needs to be calculated
 */
const Statistics:React.FC<{properties:Properties[],classes:number[],propertyName:string}> = ({ properties , classes, propertyName}) => {
    
    //Initialising the table data
    const tableData:string[][]=[["Measure"],[`${propertyName} Mean`],[`${propertyName} Median`],[`${propertyName} Mode`]];
    
    //Pushing classes to the first row of the table
    classes.forEach((classNumber:number)=>{
       tableData[0].push(`Class ${classNumber}`)
    })

    //Caculating mean,median and mode for every class and pushing into table data
    classes.forEach((classNumber:number)=>{
        //Get array of values for which mean,median and mode needs tobe calculated
        const values=properties.filter((data:Properties)=>data.Alcohol === classNumber).map((data)=>data[propertyName]) 
        tableData[1].push(CalculateMean(values))
        tableData[2].push(CalculateMedian(values))
        tableData[3].push(CalculateMode(values))
    })  

    
    return (
      <>
       <Table data={tableData}></Table>
      </>
    )
  
  }
  
  export default Statistics