import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetailPage} from '../../store/productDetails/actions'
import { createAnonymousClient } from '../../store/clients/actions'
import { addProductToBasket } from '../../store/baskets/actions'
import { selectProductDetailPage } from '../../store/productDetails/selectors'
import { selectClient } from '../../store/clients/selectors'
import { useParams } from 'react-router-dom'
import ProductDetailCard from '../../components/ProductDetailCard'
import { appLoading, appDoneLoading } from '../../store/appState/actions'

export default function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const product = useSelector(selectProductDetailPage)
    const client = useSelector(selectClient)
    const clientId = client.id
    
    
    function dispatchOnClick(id){
        if(clientId === undefined){
            dispatch(appLoading)
            dispatch(createAnonymousClient(id))
            dispatch(appDoneLoading)
        } 
        
        if(clientId !== undefined && clientId){
            dispatch(appLoading)
            dispatch(addProductToBasket(clientId,id))
            dispatch(appDoneLoading)
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
