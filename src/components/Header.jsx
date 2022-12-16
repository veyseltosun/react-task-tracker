import React from 'react'
import "../App.css"
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button/>

    </header>
  )
}



Header.defaultProps ={
    title:"Task Tracker as Default"
}

export default Header