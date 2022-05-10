import React, { useState } from "react";

const Button = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    return setButtonText('Been Clicked');
  }

  return <button onClick={handleClick}>{buttonText}</button>
}

export default Button


// // Class写法
// import React, { Component } from 'react';

// class Button extends Component {
//   state = {
//     buttonText: 'Click me'
//   }

//   handelClick = event => {
//     this.setState({
//       buttonText: 'Been Clicked'
//     })
//   }

//   render () {
//     return (
//       <button onClick={this.handelClick}>{this.state.buttonText}</button>
//     )
//   }
// }

// export default Button