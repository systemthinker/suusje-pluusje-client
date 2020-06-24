import React from 'react'
import './index.css'

import { Button } from 'react-bootstrap'
export default function BasketCard(props) {
    const {id,name,description,imageUrl,price} = props
    return (
        <div>
        <div className="grid-container">
                <img height="100" width="90" className="center-block grid-item" src={imageUrl} alt=""></img>
                <p className="grid-item name">{name}</p>
                <div className="grid-item plusMinus">
                    <Button size="sm" type="button" class="btnBasket" id="btnMinus"><i data-feather="minus"></i>- </Button>
                         <input type="number" class="form-control" value="1" min="1" max="999" id="numberCol" />
                    <Button type="button" class="btn" id="btnPlus"><i data-feather="plus"></i>+ </Button>
                </div>     
                <p className="grid-item">prijs &#8364;</p>
                <p className="grid-item priceBasket"> {price}</p>
        </div>
       


        </div>
    )
}
