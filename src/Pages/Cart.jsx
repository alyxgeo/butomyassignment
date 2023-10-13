import { useDispatch, useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import { clearCart } from "../utils/cartSlice"
import EmptyItem from "../components/EmptyItem"
import Button from "../Ui/Button"
import LinkButton from "../Ui/LinkButton"


const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart)
  //console.log(cart)


  const totalCartQuantity = useSelector((state) => state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0))
  //console.log(totalCartQuantity)


  const totalCart = useSelector((state) => state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0))
  //console.log(totalCart)




  if (!cart.length) return <EmptyItem name='Cart' to='/shop' />



  return (
    <div className='py-3 px-4'>

      <div>
        <LinkButton to="/shop"> &larr; Back to Shop</LinkButton>
      </div>

      <div className="mt-5">
        <LinkButton to="/wishlist">wishlist ❤️</LinkButton>
      </div>

      <h2 className='mt-7 text-xl font-semibold'>Your cart</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map((item) => <CartItem item={item} key={item.id} />)}
      </ul>


      <div className='mt-6 space-x-2'>

        <Button >Order Products 🛒</Button>
        <Button onClick={() => dispatch(clearCart())}  >Clear cart 🗑️</Button>

      </div>

    </div>
  )
}

export default Cart