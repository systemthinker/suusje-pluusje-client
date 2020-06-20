import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/products/actions'
import { selectProducts } from '../../store/products/selectors'
import ProductCard from '../../components/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import './home.css'

export default function Home() {
const products = useSelector(selectProducts)
const dispatch = useDispatch()

console.log('products?', products)

    useEffect(()=>{

        dispatch(fetchProducts())


    },[dispatch])


    

      
    return (
        // 
        //   <Col>1 of 1</Col>
        // </Row>
      
      <Container fluid>
            <h1 className="App">Welkom op SuusjePluusje!</h1>
            <Row>
                {products.map((product,index)=>{
                    if (index <= 3) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 3 && index <= 7) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 7 && index <= 11) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} />
                    </Col>
                    }
                })}
            </Row>
            <Row>
                {products.map((product,index)=>{
                    if (index > 11 && index <= 15) {
                    return <Col sm={3} className="column" key={product.id}>
                        <ProductCard  {...product} />
                    </Col>
                    }
                })}
            </Row>
            
            
       </Container>
    )
}
