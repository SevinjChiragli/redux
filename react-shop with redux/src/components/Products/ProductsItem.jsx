import { useDispatch } from "react-redux"
import { addToBag } from "../../store/slices/bagSlice"

function ProductsItem(props) {
    let dispatch = useDispatch()

    return (
        <li>
            <p>{props.product_name}</p>
            <p>{props.product_description}</p>
            <p>{props.product_price}</p>
            <img src={props.url} alt={props.product_name} />
            <button onClick={() => dispatch(addToBag(props))}>ADD</button>
        </li>
    )
}

export default ProductsItem