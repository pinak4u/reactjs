import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PurComp from './PurComp'
import MemoComp from './MemoComp'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
    }
    
    componentDidMount() {
        setInterval(() =>{
           this.setState({name:'Pinak'})     
        },2000);
    }
    render() {
        console.log("===Parent Component Render===")
        return (
            <div>
                {/* <PurComp name={this.state.name}/> */}
                {/* <RegComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
