import React from 'react'
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ProductDetailCard({id, name, price , imageUrl, description, dispatchOnClick}) {
    return (
        <Container fluid>
            <div height="200px"></div>
            <h1>{name}</h1>
            <img height="600px" src={`${imageUrl}`} alt=""></img>
            <p>{description}</p>
            <h1>&euro;{price}</h1>
            
               <Button  size="lg" onClick={e=>dispatchOnClick(id)} variant="success">Voeg Toe Aan Winkelwagen</Button>
            
        </Container>
    )
}
