import { useContext } from "react"
import { MyContext } from "../../App"
import { addToOrders } from "../../reducers/reducerFetchs/reducerOrdersFetchs"
import { addToProducts } from "../../reducers/reducerFetchs/reducerProductsFetchs"

function AddForm() {

    let {dispatchEdit}  = useContext(MyContext)

    function handleAddForm(ev) {
        ev.preventDefault()
        let formData = Object.fromEntries([... new FormData(ev.target)])
        addToProducts(formData, dispatchEdit)
    }
    
    return(
        <form onSubmit={handleAddForm}>
            <input type="text" name='product_name' placeholder="product_name"/>
            <input type="text" name='product_description' placeholder="product_description"/>
            <input type="text" name='product_price' placeholder="product_price"/>
            <input type="text" name='url' placeholder="url"/>
            <button>ADD</button>
        </form>
    )
}

export default AddForm