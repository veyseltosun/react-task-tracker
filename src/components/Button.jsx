import React from 'react'

const Button = ({color, text, toggleShow }) => {
  return (
    <button  onClick={toggleShow}
     className='btn'
     style={{backgroundColor: color}}
    >
          {text}

    </button>
  )
}

Button.defaultProps = {
    color: "green",
    text: "toggle button",
}


export default Button