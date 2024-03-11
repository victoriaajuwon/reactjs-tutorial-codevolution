import React, { Component } from 'react'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Victoria'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            
        })
    }

  render() {
    return (
      <div>
        Parent Componet
      </div>
    )
  }
}

export default ParentComp
