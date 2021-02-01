import React, { Component } from 'react'

class RegComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("===Regular Component Rendered===");
        return (
            <div>
             <p>{this.props.name}</p>   
            </div>
        )
    }
}
export default RegComp;