export async function getProductsFetch(dispatch) {
    try {
        let response = await fetch('http://localhost:5000/goods')
        let data = await response.json()

        dispatch({ type: 'GET PRODUCTS', payload: data })
    } catch (err) {
        console.log(err)
    }
}

export async function deleteFromProducts(id) {
    try {
        let response = await fetch(`http://localhost:5000/delete-admin/${id}`, {
            method: 'DELETE'
        })
        let data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export async function addToProducts(product, dispatch) {
    try {

        let response = await fetch('http://localhost:5000/add-admin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        let data = await response.json()
        product.id = data.id
        if (data.case) {
            dispatch({ type: 'ADD FORM', payload: product })
        }

        console.log(data.text)
    } catch (err) {
        console.log(err)
    }
}

export async function editProducts(product,id) {
    try {

        let response = await fetch(`http://localhost:5000/change-admin/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        let data = await response.json()

        console.log(data.text)
    } catch (err) {
        console.log(err)
    }
}

