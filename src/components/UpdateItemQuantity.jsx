import { useDispatch } from "react-redux"
import Button from "../Ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "../utils/cartSlice"


const UpdateItemQuantity = ({ id, quantity }) => {

    const dispatch = useDispatch()

    return (
        <div className="flex gpa-1 items-center md:gap-3">

            <Button
                onClick={() => dispatch(decreaseItemQuantity(id))} >-</Button>

            <span className="text-sm font-medium gap-2">{quantity}</span>

            <Button
                onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>

        </div>
    )
}

export default UpdateItemQuantity