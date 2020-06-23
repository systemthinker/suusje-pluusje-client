import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetailPage} from '../../store/productDetails/actions'
import { createAnonymousClient } from '../../store/clients/actions'
import { addProductToBasket } from '../../store/baskets/actions'
import { selectProductDetailPage } from '../../store/productDetails/selectors'
import { selectClient } from '../../store/clients/selectors'
import { useParams } from 'react-router-dom'
import ProductDetailCard from '../../components/ProductDetailCard'

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const product = useSelector(selectProductDetailPage)
    const client = useSelector(selectClient)
    
    
    function dispatchOnClick(productId){
        if(client.clientId === undefined){
            dispatch(createAnonymousClient(productId))
        } 
        
        if(client.clientId !== undefined && client.clientId){
            dispatch(addProductToBasket(client.clientId,productId))
        }
        }

    useEffect( ()=>{
        dispatch(fetchProductDetailPage(id))
        
    },[dispatch])
    return (
        <div>
            <ProductDetailCard {...product} dispatchOnClick={dispatchOnClick}/>
        </div>
    )
}
