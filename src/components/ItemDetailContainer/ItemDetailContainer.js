import { useState, useEffect } from 'react'
import { getProduct } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct().then(response => {
            console.log("response", response)
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   

    }, [])

    if (loading) {
        return <h1>Cargando detalles de producto...</h1>
    }

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer
