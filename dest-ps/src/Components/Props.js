import React from 'react';
                                                    //functional component destructuring

// const Props = ({name,js}) => {                              //first way
    
//      return (
//          <div>
//      <h1>
//           {name} is working on {js}
//      </h1> 
        
//         </div>
//      )

//     }                           

    const Props = props => {                              //second way to destruct props in function components
            const {name,js} = props
        return (
            <div>
        <h1>
             {name} has won the trophies for {js}
        </h1> 
           
           </div>
        )
   
       }             

   
export default Props;