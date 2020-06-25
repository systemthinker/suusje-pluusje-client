import React , { useState,useEffect }from 'react'
import './index.css'

import { Button } from 'react-bootstrap'
export default function BasketCard(props) {
    let {id,name,description,imageUrl,price,onClickAddItemToCard, onClickRemoveItemCard, quantity,productId} = props
    price = parseFloat(price.replace(',','.'))
    
    

        const totalPrice =  price * quantity
       
    
  
    return (
        <div>
        <div className="grid-container">
                <img height="100" width="90" className="center-block grid-item" src={imageUrl} alt=""></img>
                <p className="grid-item name">{name}</p>
                <div className="grid-item plusMinus">
                    <Button onClick={(e)=>{
                        onClickRemoveItemCard(productId)
                    }}
                        size="sm" type="button" className="btnBasket" id="btnMinus"><i data-feather="minus"></i>- </Button>
                         <input type="number" className="form-control" value={quantity} max="999" id="numberCol" />
                    <Button onClick={(e)=>{
                        
                        onClickAddItemToCard(productId)
                        
                        }} value={quantity} type="button" className="btn" id="btnPlus"><i data-feather="plus"></i>+ </Button>
                </div>     
                <p className="grid-item">prijs &#8364;</p>
                <p className="grid-item priceBasket"> {totalPrice}</p>
        </div>
       


        </div>
    )
}
