import React, { PureComponent } from 'react'

class PurComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("===Pure Component Rendered===")
        return (
            <div>
            <p>{this.props.name}</p>   
            </div>
        )
    }
}

export default PurComp;