import { useQuery } from "@tanstack/react-query"
import { getProduct } from "../services/apiProducts"
import CardItem from "../components/CardItem"
import Spinner from "../components/Spinner"
import { useSelector } from "react-redux"

const ShopAll = () => {


    const { isLoading, data: products } = useQuery({
        queryKey: ['product'],
        queryFn: getProduct,
    })






    const search = useSelector(state => state.search.search)
    //console.log(search)



    if (isLoading) return <Spinner />


    return (

        <div className="flex flex-wrap" >

            {products.filter((product) => {
                return search.toLowerCase() === '' ? product :
                    product.name.toLowerCase().includes(search)
            })
                .map((product) => (
                    <CardItem product={product} key={product.id} />
                ))}

        </div>
    )
}

export default ShopAll