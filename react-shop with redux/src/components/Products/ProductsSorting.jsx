import { useDispatch } from "react-redux"
import { productsSorting } from "../../store/slices/productsSlice"


function ProductsSorting() {
    
    let dispatch = useDispatch()

    return (
        <select onChange={(ev) => dispatch(productsSorting(ev.target.value))}>
            <option value="UP">UP</option>
            <option value="DOWN">DOWN</option>
        </select>
    )
}

export default ProductsSorting