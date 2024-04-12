import { useState } from "react"
export function Newtodoform({ onSubmit }) {

    const [newItem, setnewitem] = useState("")

    function handlesubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setnewitem("")
    }

    return (
        <form onSubmit={handlesubmit} className='new-item-form' >
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" value={newItem} onChange={e => setnewitem(e.target.value)} id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}