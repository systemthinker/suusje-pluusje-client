import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ProductDetailCard({name, price , imageUrl, description}) {
    return (
        <Container fluid>
            <div height="200px"></div>
            <h1>{name}</h1>
            <img height="600px" src={`${imageUrl}`} alt=""></img>
            <p>{description}</p>
            <h1>&euro;{price}</h1>
            <Link to="/winkelwagen">
               <Button  size="lg" variant="success">Voeg Toe Aan Winkelwagen</Button>
            </Link>
        </Container>
    )
}
