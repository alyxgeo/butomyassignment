import UpdateItemQuantity from "./UpdateItemQuantity";


const CartItem = ({ item }) => {

    const { id, name, price, quantity, totalPrice } = item;


    return (
        <li className="py-3 sm:flex sm:item-center sm:justify-between">

            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>

            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{totalPrice}</p>

                <UpdateItemQuantity id={id} quantity={quantity} />


            </div>
        </li>
    )
}

export default CartItem