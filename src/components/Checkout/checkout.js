import '../Checkout/checkout.css'
import { useContext, useState} from "react"
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Checkout = () => {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    const { cart, clearCart, total } = useContext(CartContext)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [mail, setMail] = useState("");  

    const createOrder = async () => {
        try {
            if (!name || !phone || !mail) {
                MySwal.fire({
                    title: 'Faltan datos para generar tu Orden!',
                    icon: 'error',
                    background: '#242323',
                    color: '#FFFFF0',
                  });
            } else {
                if (cart.length > 0) {
                  const dataBaseRef = collection(db, 'products ')
                  const ordersRef = collection(db, 'orders')
                  const cartIds = cart.map(product => product.id)
                  const withoutSrock = []
                  const portion = writeBatch(db)
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
        
                  const productOfCart = await getDocs(query(dataBaseRef, where(documentId(), 'in', cartIds)))
                  const { docs } = productOfCart
                  docs.forEach(product => {
                    const data = product.data()
                    const dataBaseStock = data.stock
        
                    const products = cart.find(doc => doc.id === product.id)
                    const productsQuantity = products?.quantity

                    if (dataBaseStock >= productsQuantity) {
                        portion.update(product.ref, { stock: dataBaseStock - productsQuantity })
                      } else {
                        withoutSrock.push({ id: product.id, ...data })
                      }
                    })
                    if (withoutSrock.length === 0) {
                      const addOrder = await addDoc(ordersRef, objOrder)
                      const idOrder = addOrder.id
                      portion.commit()
                      MySwal.fire({
                        title: '¡Muchas Gracias por tu Compra! El Id de tu compra es ' + idOrder,
                        icon: 'success',
                        text: 'Revisa tu Correo electronico para consultar tu factura y datos de entrega.',
                        background: '#242323',
                        color: '#FFFFF0'
                      })
                      setName('');
                      setMail('');
                      setPhone('');
                      clearCart();
                      navigate('/', { replace: true });
                    } else {
                      MySwal.fire({
                        title: 'Error! Uno de los productos está fuera de Stock.',
                        icon: 'warning',
                        background: '#242323',
                        color: '#FFFFF0',
                      });
                    }
                  } else {
                    MySwal.fire({
                      title: '¡Tu carrito está vacío!',
                      icon: 'question',
                      text: 'revisa tus productos.',
                      background: '#242323',
                      color: '#FFFFF0'
                    });
                  }
                }
              } catch (error) {
                MySwal.fire({
                  title: error,
                  icon: 'error',
                  background: '#242323',
                  color: '#FFFFF0',
                })
              }
            }
            
    return (
        <div>
            <h2 className='textOfCheckout'>¡Ingresa tus datos para finalizar la compra!</h2>
            <form>
                <label className='inputsForm'>Nombre : 
                    <input type="text" onChange={(e) => {setName(e.target.value);}}/>
                </label>
                <label className='inputsForm'>Email :    . .
                    <input type="text" onChange={(e) => {setMail(e.target.value);}}/>
                </label>
                <label className='inputsForm'>Teléfono .
                    <input type="text" onChange={(e) => {setPhone(e.target.value);}}/>
                </label>
            </form>
            <button className="ButtonOpcion" onClick={createOrder}>Comprar</button>

        </div>
    )
}

export default Checkout 