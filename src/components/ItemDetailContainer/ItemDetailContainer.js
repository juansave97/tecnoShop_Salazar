import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   

    }, [productId])

    if (loading) {
        return <h1>Cargando detalles de producto...</h1>
    }

    return (
        <ItemDetail {...product} addItem={addItem}/>
    )
}

export default ItemDetailContainer
