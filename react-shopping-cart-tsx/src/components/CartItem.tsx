import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../components/items.json'
import { Button, Stack } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
    id: number,
    quantity: number
}

function CartItem({ id, quantity }: CartItemProps) {

    const { removeFromCart } = useShoppingCart();
    const item: any = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
            <img src={item.imageUrl} style={{ width: "75px", height: "75px", objectFit: "cover" }} />

            <div className='me-auto'>
                <div>
                    {item.name}
                    {
                        quantity >= 1 && (<span className='text-muted'> {quantity}x</span>)
                    }
                    <div>{formatCurrency(item.price)}</div>
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>X</Button>
            </div>
        </Stack>
    )
}

export default CartItem