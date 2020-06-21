import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetailPage} from '../../store/productDetails/actions'
import { selectProductDetailPage } from '../../store/productDetails/selectors'
import { useParams } from 'react-router-dom'
import ProductDetailCard from '../../components/ProductDetailCard'

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const product = useSelector(selectProductDetailPage)
    console.log('product please', product)
    
    

    

    useEffect( ()=>{
        dispatch(fetchProductDetailPage(id))
        
    },[dispatch])
    return (
        <div>
            <ProductDetailCard {...product}/>
        </div>
    )
}
