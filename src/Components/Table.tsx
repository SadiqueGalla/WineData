
import React from 'react';
/**
 * Utility component to show and 2D array into tabular form
 * @param  {String[]} data The data to be shown

 */
const Table:React.FC<{data:string[][]}> = ({data}) => {
    

    return (
      <table cellSpacing={0} border={1}>
        <tbody>
            {data.map((row,index)=>{
                return <tr key={index}>
                   {
                     row.map((cell,cellIndex)=>{
                         return <td key={cellIndex}>
                             <strong>{cell}</strong>
                         </td>
                     })  
                   }
                </tr>
            })}
        </tbody>
      </table>
    )
  
  }

export default Table
  
