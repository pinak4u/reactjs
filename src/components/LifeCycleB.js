import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:''
        }
        console.log('Component B constructor');
    }
    componentDidMount() {console.log('componentDidMount for  LifeCycle B'); }
    static getDerivedStateFromProps(props) { console.log('getDerivedStatefromProps for LifeCycle B'); return null;}
    shouldComponentUpdate(){console.log('shouldcomponent update method for LifeCycle B'); return true;}
    getSnapshotBeforeUpdate(prevProps,prevState) {console.log('getSnapshotBeforeUpdate for LifeCycle B'); return null;}
    componentDidUpdate(){console.log('componentDidUpdate for LifeCycle B')}

    render() {
        console.log('Component B render')
        return (
            <div>
                <p>LifeCycleB</p>   
            </div>
        )
    }
}

export default LifeCycleB;