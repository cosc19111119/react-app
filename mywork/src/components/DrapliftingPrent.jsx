import { useState } from "react"
import DrapliftingChild from "./DrapliftingChild"


function DrapliftingPrent() {
    const [item, setItem] = useState(["umar", "farooq", "jutt_j"])

    const updateItem = (items) => {
        const neeItem = [...item, items]

        setItem(neeItem)
    }


    return (
        <>
            <DrapliftingChild item={item} updateItem={updateItem} />

        </>

    )

}
export default DrapliftingPrent