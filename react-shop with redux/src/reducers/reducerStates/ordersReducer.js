export let initialObjectOrders = {
    orders:[]
}

export function ordersReducer(state, action) {

 if(action.type === 'GET ORDERS'){
        console.log(action.payload)
        return {...state, orders: action.payload}
    }
    
    return state
}