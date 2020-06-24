import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import { fetchBasket } from '../../store/baskets/actions'

export default function Basket() {
// const basket = useSelector(selectBasket)

    useEffect(()=>{
        useDispatch(fetchBasket);
    },[dispatch])
    return (
        <div>
            <h1 className='App'>Winkelwagen</h1>
            <Container fluid>
            <Row>
                 <Col lg={2}></Col>
                 <Col md={5}>
                     items
                 </Col>
                 <Col md={3}>delivery info</Col>
                 <Col lg={2}></Col>
            </Row>

            </Container>
        </div>
    )
}
