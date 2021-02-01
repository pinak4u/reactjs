import React, { Component } from 'react'

class MemoComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("============MemoComponent is rendered============")
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default React.memo(MemoComp);
