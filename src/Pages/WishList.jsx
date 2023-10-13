import { useDispatch, useSelector } from "react-redux"
import WishlistItem from "../components/WishlistItem"
import { clearWishList } from "../utils/wishSlice"
import EmptyItem from "../components/EmptyItem"
import LinkButton from "../Ui/LinkButton"
import Button from "../Ui/Button"





const WishList = () => {

    const dispatch = useDispatch()

    const wishlist = useSelector((state) => state.wishlist.wishlist)
    //console.log(wishlist)


    if (!wishlist.length) return <EmptyItem name='Wishlist' to='/shop' />



    return (
        <div className='py-3 px-4'>

            <LinkButton to='/shop'>&larr; Back to Shop</LinkButton>

            <h2 className='mt-7 text-xl font-semibold'>Your Wishlist</h2>

            <ul className='divide-y divide-stone-200 border-b mt-3'>
                {wishlist.map((item) => <WishlistItem item={item} key={item.id} />)}
            </ul>


            <div className='mt-6 space-x-2'>

                <Button onClick={() => dispatch(clearWishList())} >Clear Wishlist</Button>

            </div>

        </div>
    )
}

export default WishList