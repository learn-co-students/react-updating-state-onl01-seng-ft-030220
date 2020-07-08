// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {
  state = {
    hasBeenClicked: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        hasBeenClicked: !prevState.hasBeenClicked
      }
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick
