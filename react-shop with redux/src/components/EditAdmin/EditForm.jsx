import { useContext } from "react"
import { MyContext } from "../../App"
import { editProducts } from "../../reducers/reducerFetchs/reducerProductsFetchs"

function EditForm({product}) {

    let {dispatchEdit}  = useContext(MyContext)

    function handleEditForm(ev) {
        ev.preventDefault()
        let formData = Object.fromEntries([... new FormData(ev.target)])
        editProducts(formData, product.id)
        dispatchEdit({type:'EDIT PRODUCT', payload:{formData:formData, id: product.id}})
    }
    
    return(
        <form onSubmit={handleEditForm}>
        <input defaultValue={product.product_name} type="text" name='product_name' placeholder="product_name"/>
        <input defaultValue={product.product_description} type="text" name='product_description' placeholder="product_description"/>
        <input defaultValue={product.product_price} type="text" name='product_price' placeholder="product_price"/>
        <input defaultValue={product.url} type="text" name='url' placeholder="url"/>
        <button>EDIT</button>
    </form>
    )
}

export default EditForm