import React from 'react'
import NavbarController from './NavbarController'

const base = ({ title = "welcom", children}) => {
  return (
    <div>
      <NavbarController />
      {children}

      
    </div>
  )
}

export default base
