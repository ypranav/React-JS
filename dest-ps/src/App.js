import './App.css';

import React, {Component} from 'react'
import Props from './Components/Props';
import VueI from './Components/VueI';



 class App extends Component {
  render() {
      return (
         <div className ='App'>
             <Props name ="Mumbai" js="5 times"/>
                <p> Also won the CLT20 2 times!</p>
             <Props name ="CSK" js="3 times"/>
                 <p> Also won the CLT20 1 time!</p>

             <VueI name ="RCB" js= "0 times"/>  
             <p> This time they will win the IPL trophy!</p>
                  
         </div>
             );
           }
                            }

export default App;
