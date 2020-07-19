import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'




export default function ProductCardBasket({id, name, description, price, imageUrl, dispatchOnClick}) {
    
    
    
   
       
    
    return (

        
        <div className="card">
            <Button variant="success" onClick={e=>dispatchOnClick(id)} block>In Winkelwagen</Button>
                <p>{name}</p>
                <img height="130" width="140" className="center-block" src={imageUrl} alt=""></img>
                
               
                <p className="description">{description}</p>
                <p className="price"> {price}</p>
                
                
                
             
            
            
        </div>
        
    )
}
