import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/actions'
import { addProductToBasket, createBasket } from '../../store/baskets/actions'
import { createAnonymousClient } from '../../store/clients/actions'
import { selectProducts } from '../../store/products/selectors'
import { selectClient } from '../../store/clients/selectors'
import ProductCard from '../../components/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import './home.css'

export default function Home() {
const products = useSelector(selectProducts)
const dispatch = useDispatch()
const client = useSelector(selectClient);


    useEffect(()=>{

        dispatch(fetchProducts())


    },[dispatch])


    function dispatchOnClick(productId){
        if(client.clientId === undefined){
           
            dispatch(createAnonymousClient(productId))
            
            
               
        } 
        
        if(client.clientId !== undefined && client.clientId){
            
            dispatch(addProductToBasket(client.clientId,productId))
        }
        }


      
    return (
        
      
      <Container fluid>
            <h1 className="App">Welkom op SuusjePluusje!</h1>
            <Row>
                {products.map((product,index)=>{
                    if (index <= 3) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} dispatchOnClick={dispatchOnClick} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 3 && index <= 7) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} dispatchOnClick={dispatchOnClick} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 7 && index <= 11) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} dispatchOnClick={dispatchOnClick} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 11 && index <= 15) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} dispatchOnClick={dispatchOnClick}/>
                    </Col>
                    }
                })}
            </Row>
            
            
       </Container>
    )
}
