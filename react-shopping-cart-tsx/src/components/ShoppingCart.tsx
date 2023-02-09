import React, { useState } from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import storeItems from '../components/items.json'
import { formatCurrency } from '../utilities/formatCurrency'


type ShoppingCartProps = {
    isOpen: boolean
}

function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    function cartTotalPrice(): number {
        return cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
        }, 0)
    }
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                            )
                        )
                    }
                    <div className='me-auto fw-bold'>Total: {formatCurrency(cartTotalPrice())}</div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart