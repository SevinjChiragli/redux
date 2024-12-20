import { Link } from "react-router-dom"
import EditAdminList from "../EditAdmin/EditAdminList"
import AddForm from "../EditAdmin/AddForm"

function EditAdmin() {

    return (
        <section>
            <Link to='/admin'>ADMIN</Link>
            <h1>EDIT ADMIN</h1>
            <AddForm/>
            <EditAdminList/>
        </section>
    )
}

export default EditAdmin