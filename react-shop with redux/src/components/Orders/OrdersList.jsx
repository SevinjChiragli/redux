import { useEffect } from "react";
import OrdersItem from "./OrdersItem";
import { getOrders } from "../../reducers/reducerFetchs/reducerOrdersFetchs";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../store/slices/ordersSlice";

function OrdersList() {
   let dispatch=useDispatch()

    let orders = useSelector((state) => state.orders.orders)
    useEffect(() => {
       dispatch(ordersFetch())
    },[])

    return (
        <ul>
            {orders.map((item) => <OrdersItem key={item.id} {...item}/>)}
        </ul>
    )
}
export default OrdersList;
