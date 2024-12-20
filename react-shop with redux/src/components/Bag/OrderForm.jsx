import { useContext } from "react"
import { MyContext } from "../../App"
import { addToOrders } from "../../reducers/reducerFetchs/reducerOrdersFetchs"

function OrderForm() {

    let {dispatchOrders}  = useContext(MyContext)

    function handleOrderForm(ev) {
        ev.preventDefault()
        let formData = Object.fromEntries([... new FormData(ev.target)])
        let bag = JSON.parse(localStorage.getItem('bag'))
        formData.bag = bag
        addToOrders(formData)
        // dispatchOrders({type:'ORDER FORM', payload: formData})
    }
    
    return(
        <form onSubmit={handleOrderForm}>
            <input type="text" name='customer_name' placeholder="customer_name"/>
            <input type="text" name='customer_address' placeholder="customer_address"/>
            <input type="text" name='customer_tel_number' placeholder="customer_tel_number"/>
            <button>ORDER</button>
        </form>
    )
}

export default OrderForm