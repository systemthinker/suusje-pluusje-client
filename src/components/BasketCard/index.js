import React , { useState,useEffect }from 'react'
import { selectAppLoading } from '../../store/appState/selectors'
import { useSelector } from 'react-redux'
import { Col,Row } from "react-bootstrap";
import './index.css'

import { Button } from 'react-bootstrap'
export default function BasketCard(props) {
    const isLoading = useSelector(selectAppLoading);
    
    let {id,name,description,imageUrl,price,onClickAddItemToCard, onClickRemoveItemCard, quantity,productId} = props
    price = parseFloat(price.replace(',','.'))
    
    

        const totalPrice =  price * quantity
      
    function loading(value){
     if(isLoading){
         return null
     }  else if(value === "Add") {
         return onClickAddItemToCard(productId)
     } else if(value === "Remove") {
         return onClickRemoveItemCard(productId)
     }
    }
  
    return (
        <div>
        <div>
            <Row className="row-bg">
                <Col>
                    <img height="100" width="90" className="center-block grid-item" src={imageUrl} alt=""></img>
                </Col>  
                <Col> 
                    <p className="grid-item">{name}</p>
                </Col> 
                <Col> 
                    <div className="grid-item plusMinus">
                        <Button onClick={(e)=>{
                            {loading('Remove')}
                        }}
                            size="sm" type="button" className="btnBasket" id="btnMinus"><i data-feather="minus"></i>- </Button>
                            <input type="number" className="form-control" value={quantity} max="999" id="numberCol" />
                        <Button onClick={(e)=>{
                            {loading("Add")}
                            
                            
                            }} value={quantity} type="button" className="btn" id="btnPlus"><i data-feather="plus"></i>+ </Button>
                    </div>  
                </Col>
                <Col>         
                    <p className="grid-item">prijs </p>
                </Col>
                <Col>    
                    <p className="grid-item"> &#8364; {totalPrice.toFixed(2).toString().replace('.',',')}</p>
                </Col> 
            </Row>
        </div>
       


        </div>
    )
}
