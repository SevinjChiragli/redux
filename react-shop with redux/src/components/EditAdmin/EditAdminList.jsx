import { useContext } from "react"
import { useEffect } from "react"
import { MyContext } from "../../App"
import { getProductsFetch } from "../../reducers/reducerFetchs/reducerProductsFetchs"
import EditAdminItem from "./EditAdminItem"

function EditAdminList() {

    let {stateEdit, dispatchEdit} = useContext(MyContext)

    useEffect(() => {
        getProductsFetch(dispatchEdit)
    }, [])
    
    return(
        <ul>
            {stateEdit.edit_products.map((item) => <EditAdminItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default EditAdminList