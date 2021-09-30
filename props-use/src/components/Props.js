import React from 'react';

const Props = (emp) => {
    console.log(emp);
     return (
         <div>
     <h1>
          {emp.name} is working on {emp.js}
     </h1> 
        
        </div>
     )

    }                           

export default Props;