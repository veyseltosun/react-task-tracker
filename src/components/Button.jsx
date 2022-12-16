import React from 'react'

const Button = ({color, text }) => {
  return (
    <button
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