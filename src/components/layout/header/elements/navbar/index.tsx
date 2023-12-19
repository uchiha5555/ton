import React from 'react'
import { NavItem, NavbarContainer } from './style'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem>Use</NavItem>
      <NavItem>Learn</NavItem>
      <NavItem>Build</NavItem>
      <NavItem>Community</NavItem>
    </NavbarContainer>
  )
}

export default Navbar