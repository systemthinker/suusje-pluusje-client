import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectBasket } from '../../store/baskets/selectors'
import { selectAppLoading } from '../../store/appState/selectors'
import OrderButton from '../OrderButton'




export default function ProductDetailCard({id, name, price , imageUrl, description, dispatchOnClick}) {
    const isLoading = useSelector(selectAppLoading);
    const mystyle = {
        marginTop: "10px",
        height: "70px",
        width: "30%",
        
      };
    const basket = useSelector(selectBasket);
    
    function loading(){
        if(isLoading){
            return null;
        } else {
            return dispatchOnClick(id)
        }
    }

    function loadingOrderButton(){
        if(isLoading){
            return null;
        } else {
            return <OrderButton />
        }
    }


    const isInBasket = basket.find(b=>b.id ===id) ? loadingOrderButton() : <Button style={mystyle} size="lg" onClick={e=>{loading()}} variant="success">Voeg Toe Aan Winkelwagen</Button>
    

    return (
        <Container fluid>
            <div height="200px"></div>
            <h1>{name}</h1>
            <img height="400px" src={`${imageUrl}`} alt=""></img>
            <p>{description}</p>
            <h1>&euro;{price}</h1>
            {isInBasket}
               
            
        </Container>
    )
}
