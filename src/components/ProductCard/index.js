import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector, connect } from 'react-redux'
import { selectClient } from '../../store/clients/selectors'
import { addProductToBasket } from '../../store/baskets/actions'

export default function ProductCard({id, name, description, price, imageUrl, dispatchOnClick}) {
    const dispatch = useDispatch;
    const client = useSelector(selectClient);
    
   
       
    
    return (

        // <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card">
            <img height="200" width="180" className="center-block" src={imageUrl} alt=""></img>
            <p>{name}</p>
            <p className="description">{description}</p>
            <p className="price"> {price}</p>
            {/* <Link to="/winkelwagen" style={{ textDecoration: 'none' }}> */}
                <Button variant="success" onClick={e=>dispatchOnClick(id)} block>In Winkelwagen</Button>
            {/* </Link> */}
            
        </div>
        // </Link>
    )
}
