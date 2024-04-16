import { useState } from "react"
import InventoryForm from "../Components/InventoryForm"
function Inventory() {
    const [form, setForm] = useState(true);
    return (
        <div>{form ?
            (<InventoryForm setForm={setForm} />)
            : (<></>)
        }
        </div>
    )
}

export default Inventory