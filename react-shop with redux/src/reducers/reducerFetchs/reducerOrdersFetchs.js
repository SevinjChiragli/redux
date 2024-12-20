export async function addToOrders(order) {
    try {

        let response = await fetch('http://localhost:5000/add-orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        let data = await response.json()
        console.log(data.text)
    } catch (err) {
        console.log(err)
    }
}

export async function getOrders(dispatch) {
    try {
        let response = await fetch('http://localhost:5000/orders')
        let data = await response.json()
        console.log(data)
        dispatch({ type: 'GET ORDERS', payload: data })
    } catch (err) {
        console.log(err)
    }
}