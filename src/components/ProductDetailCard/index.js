import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ProductDetailCard({name, price , imageUrl, description}) {
    return (
        <Container fluid>
            <div height="200px"></div>
            <h1>{name}</h1>
            <img height="500px" src={`${imageUrl}`} alt=""></img>
            <p>{description}</p>
            <h4>{price}</h4>
            <Link to="/winkelwagen">
               <Button variant="success">Voeg Toe Aan Winkelwagen</Button>
            </Link>
        </Container>
    )
}
