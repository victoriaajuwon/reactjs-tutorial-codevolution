import React, { Component } from 'react'

class EventBind extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this) -this is an example of binding in class constructor
    }

    // clickHandler(){
    //     this.setState({
    //         message : "Goodbye"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message : "Goodbye!"
        })
    } //this is an example of using class property as arrow function
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>Click</button> -this is an example of binding in render method */ } 
        {/* <button onClick={() => this.clickhandler()}>Click</button> -this is an example of using arrow function in render method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
