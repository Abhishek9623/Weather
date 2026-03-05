import { useState } from "react"

export function ChildComponenat({onChildComponentClickEvent}) {

    function handleButtonClick() {
        const data = "Hello ! from Child";
        onChildComponentClickEvent(data)
    }


    return (
        <div className="m-4 p-4 bg-light text-dark">
            <h4>Child Componenat</h4>
            <button onClick={handleButtonClick} className="btn btn-warning">Send data to parent</button>
        </div>
    )
}

export function TransportDemo() {

    const [data, setData] = useState()
    function ChildClick(e) {
        setData(e)
    }

    return (
        <div className="m-4 p-4 bg-dark text-white">
            <h2>Parent Componenat</h2>
            <p>{data}</p>
            <ChildComponenat onChildComponentClickEvent={ChildClick} />
        </div>
    )
}