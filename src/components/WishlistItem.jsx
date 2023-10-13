

const WishlistItem = ({item}) => {

    const {name, price, } = item;


    return (

        <li className="py-3 sm:flex sm:item-center sm:justify-between">

            <p className="mb-1 sm:mb-0">
             {name}
            </p>

            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{price}</p>

            </div>
        </li>

    )
}

export default WishlistItem