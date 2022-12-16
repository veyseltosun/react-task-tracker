import React from 'react'

// import PropTypes from 'prop-types';

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
// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// };

export default Button