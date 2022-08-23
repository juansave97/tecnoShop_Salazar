import { useContext, useState} from "react"
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase/index'


const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [mail, setMail] = useState("");  

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    emai: mail
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products ')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                batch.commit()
                console.log(orderAdded.id)
                clearCart()
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion createOrder')
        }

    }

    return (
        <div>
            <h2>Complete los campos para poder terminar la compra</h2>
            <form>
                <label>Nombre: 
                    <input type="text" onChange={(e) => {setName(e.target.value);}}/>
                </label>
                <label>Email:
                    <input type="text" onChange={(e) => {setMail(e.target.value);}}/>
                </label>
                <label>Telefono:
                    <input type="number" onChange={(e) => {setPhone(e.target.value);}}/>
                </label>
            </form>
            <button className="ButtonOpcion" onClick={createOrder}>Comprar</button>

        </div>
    )
}

export default Checkout 