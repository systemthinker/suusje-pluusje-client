import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import OrderButton from '../OrderButton'
import AddToBasketButton from '../AddToBasketButton'


export default function ProductDetailCard({id, name, price , imageUrl, description, dispatchOnClick}) {
    const mystyle = {
        marginTop: "20px",
        height: "70px",
        width: "30%",
        
      };
    const basket = useSelector(selectBasket);
    console.log('basket is' , basket)
    const isInBasket = basket.find(b=>b.id ===id) ? <OrderButton/> : <Button style={mystyle} size="lg" onClick={e=>dispatchOnClick(id)} variant="success">Voeg Toe Aan Winkelwagen</Button>
    

    return (
        <Container fluid>
            <div height="200px"></div>
            <h1>{name}</h1>
            <img height="600px" src={`${imageUrl}`} alt=""></img>
            <p>{description}</p>
            <h1>&euro;{price}</h1>
            {isInBasket}
               
            
        </Container>
    )
}
