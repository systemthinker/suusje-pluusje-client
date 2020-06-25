import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import { selectClient, selectToken } from '../../store/clients/selectors'
import { fetchBasket } from '../../store/baskets/actions'
import { addProductToBasket,removeProductFromBasket } from '../../store/baskets/actions'
import { appLoading, appDoneLoading } from '../../store/appState/actions'
import { useParams } from 'react-router-dom'
import BasketCard from '../../components/BasketCard'
import './index.css'
import { deliveryCosts } from '../../config/constants'
import DeliveryInfo from '../../components/DeliveryInfo'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Basket() {

const { id } = useParams()
const basket = useSelector(selectBasket);
const client = useSelector(selectClient)
const token = useSelector(selectToken)
const clientId = client.id
const orderPath = '/order'
const orderSignUpPath = '/order/signup'


const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchBasket(id));
    },[dispatch])

    const totalBasketPrice = basket.map(b=> parseFloat(b.price.replace(',','.')) * b.quantity).reduce((a, b) => a + b, 0) + deliveryCosts;

   
function onClickAddItemToCard(productId){
    dispatch(appLoading);
    dispatch(addProductToBasket(clientId,productId))
    dispatch(appDoneLoading)
    }

function onClickRemoveItemCard(productId){
    dispatch(appLoading);
    dispatch(removeProductFromBasket(clientId,productId))
    dispatch(appDoneLoading)
}    


const filtedBasket= basket.sort((a, b) => a.name.localeCompare(b.name))
const verified = client.isVerified && client.name && client.email && token ? orderPath : orderSignUpPath

// add assecories later in second row.
// go from css grid to bootstrap col
    return (
        <div>
            <h1 className='App'>Winkelwagen</h1>
            <Container fluid>
            <Row>
                 <Col lg={2}></Col>
                 <Col md={5}>
                     {filtedBasket.map(basketProduct=>{
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
                 <Col md={3}><DeliveryInfo/>
                 <div >
                <Link to={`${verified}`}><Button className="orderButtonUnderDelivery" variant="success" size="lg"> Ik ga bestellen {'>>'} </Button></Link>
                </div>
                 </Col>
                 <Col lg={2}></Col>
            </Row>

            <Row>
            <Col lg={2}></Col>
                 
                 <Col md={5}>
                 <div >
                <Link to={`${verified}`}><Button className="orderButtonBasket" variant="success" size="lg"> Ik ga bestellen {'>>'} </Button></Link>
                </div>
                <div >
                <Link to="/"><Button className="orderButtonBasket" variant="outline-primary" size="sm">{'<<'} Verder Winkelen </Button></Link>
                </div>

                </Col>
                 <Col md={3}></Col>
                 <Col lg={2}></Col>
            </Row>

            </Container>
            
        </div>
    )
}
