import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function ProductCard({id, name, description, price, imageUrl}) {
    return (

        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card">
            <img height="200" width="180" className="center-block" src={imageUrl} alt=""></img>
            <p>{name}</p>
            <p className="description">{description}</p>
            <p ><bolder className="price">{price}</bolder></p>
            <Link to="/winkelwagen" style={{ textDecoration: 'none' }}>
                <Button variant="success" block>In Winkelwagen</Button>
            </Link>
            
        </div>
        </Link>
    )
}
