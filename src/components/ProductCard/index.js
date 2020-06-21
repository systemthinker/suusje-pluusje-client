import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({id, name, description, price, imageUrl}) {
    return (

        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card">
            <img height="200" width="180" className="center-block" src={imageUrl} alt=""></img>
            <p>{name}</p>
            <p className="description">{description}</p>
            <p ><bolder className="price">{price}</bolder></p>
            
        </div>
        </Link>
    )
}
