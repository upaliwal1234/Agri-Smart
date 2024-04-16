import { useState } from "react"
import InventoryForm from "../Components/InventoryForm"
import InventoryBox from "../Components/InventoryBox";
function Inventory() {
    const [form, setForm] = useState(false);
    return (
        <div>{form ?
            (<InventoryForm setForm={setForm} />)
            : (<InventoryBox setForm={setForm}/>)
        }
        </div>
    )
}

export default Inventory