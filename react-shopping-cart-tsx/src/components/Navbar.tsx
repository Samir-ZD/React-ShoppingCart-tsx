import React from 'react'
import { Container, Navbar as NavBs, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavBs sticky='top' className='bg-white shadow-sm mt-2 mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button onClick={openCart} variant='primary'>Cart Items ({cartQuantity})</Button>
      </Container>
    </NavBs>
  )
}

export default Navbar