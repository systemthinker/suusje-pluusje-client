import React , { useState,useEffect }from 'react'
import { selectAppLoading } from '../../store/appState/selectors'
import { useSelector } from 'react-redux'
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
        <div className="grid-container">
                <img height="100" width="90" className="center-block grid-item" src={imageUrl} alt=""></img>
                <p className="grid-item name">{name}</p>
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
                <p className="grid-item">prijs &#8364;</p>
                <p className="grid-item priceBasket"> {totalPrice.toString().replace('.',',')}</p>
        </div>
       


        </div>
    )
}
