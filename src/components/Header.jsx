import React from 'react'
import "../App.css"
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title="Task tracker as default", toggleShow, isTaskBarShow}) => {
  return (
    <header className='header'  >
        <h1>{title}</h1>
        <Button color={ isTaskBarShow ? "steelblue" : "purple"} text={isTaskBarShow ? "Hide Add Task Bar" : "Show Add Task Bar"} toggleShow={toggleShow} />
        

    </header>
  )
}



// Header.defaultProps ={
//     title:"Task Tracker as Default"

// }
Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header