import BagList from "../Bag/BagList"
import { useDispatch, useSelector } from "react-redux"
import OrderForm from "../Bag/OrderForm"
import { clearBag } from "../../store/slices/bagSlice"

function BagPage() {

    let dispatch = useDispatch()
    let bag = useSelector((state) => state.bag.bag)    
    return (
        <section>
            <h1>BAG</h1>
            <div className="bag-page">
            <BagList/>
            <div>
                <OrderForm/>
                <p>TOTAL SUM - {bag.reduce((total, price) => total + price.totalPrice, 0)}</p>
            </div>
            </div>
            <button onClick={() => dispatch(clearBag())}>CLEAR BAG</button>
        </section>
    )
}

export default BagPage