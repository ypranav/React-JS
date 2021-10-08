import React, { Component } from 'react'

export class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username:'',
         comments : '',
         topic : 'IT'
    }
}

handleUsernameChange = (event) => {
    this.setState(
        {
            username : event.target.value
          
        })
}

handlecommentsChange= (event) => {
    this.setState({
          comments : event.target.value
    })
}
handletopicChange= (event) => {
    this.setState({
          topic : event.target.value
    })
}

    handleSubmit= event => {
        alert(` ${this.state.username} ${this.state.comments} ${this.this.state.topic}`)
    event.preventDefault()
    }


    render() {
        const {username,comments,topic} = this.state
        return (
           <form onSubmit={this.handleSubmit}>
            <div>
                <label> Username</label>
                <input type ='text' value = { username}
                 onChange={this.handleUsernameChange}/>
            </div>

            <div> 
                <label> Description </label>
                <textarea value={comments }
                    onChange={this.handlecommentsChange}/> 
            </div>

            <div> 

                <label>    Course      </label>
                <select value = {topic} onChange={this.handletopicChange}>
                    <option value ="IT"> Information Technology</option>
                    <option value = "CS"> Computer Science</option>
                    <option value = "Mech"> Mechanical </option>
                    <option value = "ENTC"> Electronics and TeleCommunications</option>
                    <option value = "Civil"> Civil </option>
                    
                </select>
            </div>
            <button type="submit" > Submit</button>
            </form> 
            
        )
    }
}

export default Form
