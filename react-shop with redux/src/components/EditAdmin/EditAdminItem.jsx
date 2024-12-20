import { useContext } from "react"
import { MyContext } from "../../App"
import { deleteFromProducts, editProducts } from "../../reducers/reducerFetchs/reducerProductsFetchs"
import EditForm from "./EditForm"

function EditAdminItem(props) {
    let { dispatchEdit } = useContext(MyContext)

    function deleteProduct() {
        deleteFromProducts(props.id)
        dispatchEdit({ type: 'DELETE PRODUCT', payload: props.id })
    }

    return (
        <li>
            <p>{props.product_name}</p>
            <p>{props.product_description}</p>
            <p>{props.product_price}</p>
            <img src={props.url} alt={props.product_name} />
            <button onClick={deleteProduct}>DELETE</button>
            <EditForm product={props} />
        </li>
    )
}

export default EditAdminItem