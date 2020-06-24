import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import { fetchBasket } from '../../store/baskets/actions'
import { useParams } from 'react-router-dom'
import BasketCard from '../../components/BasketCard'
import './index.css'
import { deliveryCosts } from '../../config/constants'
import DeliveryInfo from '../../components/DeliveryInfo'

export default function Basket() {
const { id } = useParams()
const basket = useSelector(selectBasket);
console.log('basket is', basket)
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchBasket(id));
    },[dispatch])
    return (
        <div>
            <h1 className='App'>Winkelwagen</h1>
            <Container fluid>
            <Row>
                 <Col lg={2}></Col>
                 <Col md={5}>
                     {basket.map(basketProduct=>{
                     return <BasketCard {...basketProduct}/>
                     })}

        <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item name"></div>
            <div className="grid-item"></div>
            
            <p className="grid-item priceName"> verzendkosten  &nbsp; &nbsp;&#8364;</p>
            <p className="grid-item priceShipping">{deliveryCosts}</p>

        </div>

        <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item name"></div>
            <div className="grid-item"></div>
            
            <p className="grid-item priceName"> Totaal Bedrag  &nbsp; &nbsp;&#8364;</p>
            <p className="grid-item priceShipping">500,01</p>

        </div>
                 </Col>
                 <Col md={3}><DeliveryInfo/></Col>
                 <Col lg={2}></Col>
            </Row>

            </Container>
        </div>
    )
}
