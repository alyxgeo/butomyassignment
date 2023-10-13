import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../utils/cartSlice";
import { addWishItem } from "../utils/wishSlice";



const CardItem = ({ product }) => {


    // const cart= useSelector((state)=>state.cart.cart)
    // console.log(cart)


    const { id, name, brand, image_link, price } = product;


    const dispatch = useDispatch()


    const handleAddToCart = () => {
        //console.log(id)

        const newItem = {
            id,
            name,
            brand,
            price,
            quantity: 1,
            totalPrice: price * 1,
        }
        dispatch(addItem(newItem))
    }


    const currentQuantityById = useSelector((state) =>
        (state.cart.cart.find((item) => item.id === id)?.quantity ?? 0))

    //console.log(currentQuantityById)

    const isInCart = currentQuantityById > 0;
    //console.log(isInCart)








    const handleAddToWishlist = () => {
        //console.log(id)

        const wishItem = {
            id,
            name,
            brand,
            price,
            quantity: 1,
        }
        dispatch(addWishItem(wishItem))

    }

    const currentWishlistById = useSelector((state) =>
        (state.wishlist.wishlist.find((item) => item.id === id)?.quantity ?? 0))
    //console.log(currentWishlistById)

    const isInWishlist = currentWishlistById > 0;
    //console.log(isInWishlist)





    return (

        <div className="bg-rose-100 m-3 h-[400px] w-[350px] rounded ">

            <div className="flex flex-col  items-center text-center gap-2 ">
                <img src={image_link} alt={name} className="h-[200px] w-[200px] mt-5 rounded" />
                <div>
                    <h4 className="uppercase font-medium">{brand}</h4>
                    <p>{name}</p>
                    <p className="font-semibold">price ${price}</p>


                    {!isInCart &&
                        <button className="bg-gray-300 mt-5 rounded p-2"
                            onClick={handleAddToCart}>add to cart</button>
                    }


                    {isInCart && <button className="bg-gray-300 mt-5 rounded p-2"
                        onClick={() => dispatch(deleteItem(id))}
                    >remove from cart</button>}

                   {!isInWishlist &&
                    <button className="bg-gray-300 mt-5 ml-5 rounded p-2"
                    onClick={handleAddToWishlist}>❤️</button>
                   }
                   
                </div>
            </div>
        </div>

    )
}

export default CardItem