
import './App.css';
import { Component } from 'react';
import Props from './components/Props';
import VueI from './components/VueI';


 class App extends Component {
  render() {
      return (
         <div className ='App'>
             <Props name ="Tom" js="React JS"/>
                <p> He has an experience of 2 years!</p>
             <Props name ="Bob" js="Angular JS"/>
                 <button>Add Experience</button>
             <Props name ="Jay" js="Vue JS"/>  
                 <VueI />     
         </div>
             );
           }
                            }

export default App;
