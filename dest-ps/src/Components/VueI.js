import React, { Component } from "react";
import App from "../App";
                                                //class component
class VueI extends Component {

    render() {
        const {name,js} =this.props
        // const {state1,state2}= this.state   //state sestructuring syntax
       return (
           <div>
                  <h1>
             {name} has won the trophies for {js}
                 </h1> 
           </div>
       )
    }
}

export default VueI;
