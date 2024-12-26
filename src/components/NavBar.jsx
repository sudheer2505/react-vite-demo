import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
        <NavLink to="/add-product"> Add Products </NavLink>
        <NavLink to="/products" style={{marginLeft: 10}}> Products </NavLink>
        <NavLink to="/" style={{marginLeft: 10}}> Clear </NavLink>
        </>
    )
}

export default NavBar