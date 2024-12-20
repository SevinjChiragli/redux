import { useDispatch } from "react-redux"
import { deleteFromBag, minusProduct, plusProduct } from "../../store/slices/bagSlice"

function BagItem(props) {

    let dispatch = useDispatch()
    return (
        <li>
            <p>{props.product_name}</p>
            <p>{props.product_description}</p>
            <p>{props.product_price}</p>
            <img src={props.url} alt={props.product_name} />
            <button onClick={() => dispatch(deleteFromBag(props.id))}>DELETE</button>
            <button onClick={() => dispatch(minusProduct(props.id))}>-</button>
            <p>{props.count}</p>
            <button onClick={() => dispatch(plusProduct(props.id))}>+</button>
        </li>
    )
}

export default BagItem