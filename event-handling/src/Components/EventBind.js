import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Do you want to book Ticket ?'
        }
    }

    clickHandler() {
        this.setState({
                      message : 'Ticket Booked !'        
                    })
         console.log(this)            
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)} > YES </button>
            </div>
        )
    }
}

export default EventBind
