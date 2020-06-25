import React, { useEffect,useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import { selectClient } from '../../store/clients/selectors'
import { fetchBasket } from '../../store/baskets/actions'
import { addProductToBasket,removeProductFromBasket } from '../../store/baskets/actions'
import { useParams } from 'react-router-dom'
import BasketCard from '../../components/BasketCard'
import './index.css'
import { deliveryCosts } from '../../config/constants'
import DeliveryInfo from '../../components/DeliveryInfo'

export default function Basket() {
const [price,setPrice] =useState(0)
const { id } = useParams()
const basket = useSelector(selectBasket);
const client = useSelector(selectClient)
const clientId = client.id
console.log('basket is', basket)
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchBasket(id));
    },[dispatch])

    const totalBasketPrice = basket.map(b=> parseFloat(b.price.replace(',','.')) * b.quantity).reduce((a, b) => a + b, 0) 

    console.log('total is', totalBasketPrice)
function onClickAddItemToCard(productId){
    dispatch(addProductToBasket(clientId,productId))
    }

function onClickRemoveItemCard(productId){
    console.log('productid is', productId)
    dispatch(removeProductFromBasket(clientId,productId))
}    

    console.log(price);
// add assecories later in second row.
// go from css grid to bootstrap col
    return (
        <div>
            <h1 className='App'>Winkelwagen</h1>
            <Container fluid>
            <Row>
                 <Col lg={2}></Col>
                 <Col md={5}>
                     {basket.map(basketProduct=>{
                     return <BasketCard {...basketProduct} key={basketProduct.id} onClickAddItemToCard={onClickAddItemToCard} onClickRemoveItemCard={onClickRemoveItemCard}/>
                     })}

        <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item name"></div>
            <div className="grid-item"></div>
            
            <p className="grid-item priceName"> verzendkosten  &nbsp; &nbsp;&#8364;</p>
            <p className="grid-item priceShipping">{deliveryCosts.toFixed(2).replace('.',',')}</p>

        </div>

        <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item name"></div>
            <div className="grid-item"></div>
            
            <p className="grid-item priceName"> Totaal Bedrag  &nbsp; &nbsp;&#8364;</p>
            <p className="grid-item priceShipping">{totalBasketPrice.toFixed(2).replace('.',',')}</p>

        </div>
                 </Col>
                 <Col md={3}><DeliveryInfo/></Col>
                 <Col lg={2}></Col>
            </Row>

            <Row>
                 <Col lg={2}></Col>
                 
                 <Col md={5}>
                

           </Col>
                 <Col md={3}></Col>
                 <Col lg={2}></Col>
            </Row>

            </Container>
            
        </div>
    )
}
