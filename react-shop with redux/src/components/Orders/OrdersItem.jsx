function OrdersItem({ customer_name, customer_address, customer_tel_number, bag }) {
    return (
        <li>
            <p>{customer_name}</p>
            <p>{customer_address}</p>
            <p>{customer_tel_number}</p>
            <ul>{bag.map((itemBag) => {
                return (
                    <li key={itemBag.id}>
                        <p>{itemBag.product_name}</p>
                        <p>{itemBag.product_description}</p>
                        <p>{itemBag.product_price}</p>
                        <img src={itemBag.url} alt={itemBag.product_name} />
                    </li>
                )
            })}</ul>
        </li>
    )
}
export default OrdersItem;
