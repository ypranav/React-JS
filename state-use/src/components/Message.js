import React,{Component} from 'react';
import App from '../App';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome to my Youtube Channel'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thanks for SUBSCRIBING to my channel!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>SUBSCRIBE</button>
            </div>
        )
    }
}

export default Message