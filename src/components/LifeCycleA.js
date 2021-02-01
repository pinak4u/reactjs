import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
        console.log('Component A constructor');
    }
    clickHandler=()=>{
        this.setState({name:'Pinak'});
    };
    componentDidMount() {console.log('componentDidMount for  LifeCycle A'); }
    static getDerivedStateFromProps(props) { console.log('getDerivedStatefromProps for LifeCycle A'); return null;}
    shouldComponentUpdate(){console.log('shouldcomponent update method for LifeCycle A'); return true;}
    getSnapshotBeforeUpdate(prevProps,prevState) {console.log('getSnapshotBeforeUpdate for LifeCycle A'); return null;}
    componentDidUpdate(){console.log('componentDidUpdate for LifeCycle A')}
    render() {
        console.log('Component A render')
        return (
            <div>
                <button onClick={this.clickHandler}>Click Button</button>
                <LifeCycleB/>
            </div>
        )
    }

}

export default LifeCycleA
