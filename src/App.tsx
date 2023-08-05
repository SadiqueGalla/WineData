import React from 'react';
import './App.css';

import data from "./Data/Wine-Data.json"
import Properties from "./Types/Properties"
import calculateAlcoholClassses from './Utils/CalculateAlcoholClassses';
import Statistics from './Components/Statistics';


function App() {

  //Coverting the all data to Number and also adding up gamma property for the dataset
 const properties:Properties[]=data.map((wine:any)=>{
   const returnObject:any={}
   for(const i in wine){
     returnObject[i]=Number(wine[i])
   }
   const {Ash,Hue,Magnesium}=returnObject;
   returnObject["Gamma"]=parseFloat(((Ash * Hue) / Magnesium).toFixed(2));
   return returnObject;
 });  
 
 //Calculate unique classes of alchohol
 const classes:number[]=calculateAlcoholClassses(properties);
 
  return (
    <div className="App">
        {/* Using Statistics component to calculate and render the statistics of "Flavanoids" and "Gamma" properties */}
       <Statistics properties={properties} classes={classes} propertyName={"Flavanoids"}/>
       <Statistics properties={properties} classes={classes} propertyName={"Gamma"} />
    </div>
  );
}

export default App;
