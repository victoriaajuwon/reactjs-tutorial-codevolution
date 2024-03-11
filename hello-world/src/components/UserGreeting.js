import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    //using short-circuit operator
    return this.state.isLoggedIn && <div>Welcome Victoria</div>

    //using the ternary operator approach
    // return this.state.isLoggedIn ?(
    //     <div>Welcome Victoria</div>
    //     ) :(
    //     <div>Welcome Guest</div>
    //     )
    //using element varibale approach
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Victoria</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //using if/else approach
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcomne Victoria
    //         </div>
    //     )
    // } else{
    //     return(
    //         <div>
    //             Welcomne Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Vcitoria</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
