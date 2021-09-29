import './App.css';
import WithJsx from './components/WithJsx';
import { Component } from 'react';
import WithoutJsx from './components/WithoutJsx';

class App extends Component {
  render(){
  return (
    <div className="App">
      <WithJsx />
      <WithoutJsx />
    </div>
  );
}
}

export default App;
