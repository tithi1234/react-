import React, { Component } from 'react'

class Greet extends Component {
    render() {
        console.log(this.props);
        return (
            
            <div>
            <h1 className='aa'> hello  {this.props.name}</h1>
            <h3>  my hobby {this.props.hobby}</h3>
            </div>
         
        )
    }
}

export default Greet
