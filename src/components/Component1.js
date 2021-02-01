import React, { Component } from 'react'

 class Component1 extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            "firstName": "Pinak",
            "lastName" : "Patel"
        }
    }
      
    render() {
        return (
            <div>
                
                <p>{this.state.firstName} {this.state.lastName}</p>
            </div>
            
        )
    }
}

export default Component1;