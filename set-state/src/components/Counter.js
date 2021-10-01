import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        this.setState(
            {
                count: this.state.count+1
            },
            ()=> {
                console.log('Callback Value',this.state.count)
            }
        )
    }
    
    render() {
        return (
            <div>
                <div>Count -{this.state.count +1}</div>
                <button onClick={()=> this.increment()}> Increament </button>
            </div>
        )
    }
}

export default Counter
