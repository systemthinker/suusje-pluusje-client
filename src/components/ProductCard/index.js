import React from 'react'
import './productCard.css'

export default function ProductCard({name, description, price, imageUrl}) {
    return (


        <div className="card">
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <img height="300" src={imageUrl} alt=""></img>
        </div>
    )
}
