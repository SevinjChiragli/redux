import { useSelector } from "react-redux"
import BagItem from "./BagItem"

function BagList() {
    let bag = useSelector((state) => state.bag.bag)

    return(
        <ul>
            {bag.map((item) => <BagItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default BagList