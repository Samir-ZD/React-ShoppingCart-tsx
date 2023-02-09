import React from 'react'
import storeItems from './items.json';
import { Col, Row } from 'react-bootstrap';
import StoreItem from './StoreItem';

function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className='g-5'>
                {storeItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store