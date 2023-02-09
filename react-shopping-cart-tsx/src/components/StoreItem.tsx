import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imageUrl: string
}

function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    return (
        <Card className='h-100 hover'>
            <Card.Img variant='top' src={imageUrl}
                height="250px" style={{ objectFit: "contain" }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between 
                align-items-baseline'>{name}</Card.Title>
                <span>{name}</span>
                <span>{formatCurrency(price)}</span>
                <div className='mt-auto'>
                    {quantity === 0 ?
                        <Button className='w-100' onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
                        : <div style={{ gap: "0.5rem" }} className='d-flex align-items-center flex-column g-3'>
                            <div style={{ gap: "0.5rem" }} className='d-flex align-items-center g-3'>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                <span>{quantity} in Cart</span>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem