import React, { Component } from 'react';
import Insert from './Components/Insert';
import Show from './Components/Show';
 
class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }
    submitData = (newData) => {
        this.setState({ formData: newData});
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Insert submit={ this.submitData } />
                </div>
                <div className="col-12">
                    <Show data={ this.state.formData } />
                </div>
            </div>
        </div>
    }
}
 
export default App;
