import React, { Component } from 'react'

class HeroComp extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if(this.props.heroName=="Joker")
        {
          throw new Error('Not a hero.');
        }

        return (
            <div>
                {this.props.heroName}   
            </div>
        )
    }
}
export default HeroComp