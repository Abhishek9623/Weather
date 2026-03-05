import { useRef, useState } from "react";

export function DebounceDemo() {

    const [msg, setMsg] = useState('')

    function level1() {
        setMsg('valume Increase: 20%')
    }

    function level2() {
        setMsg('valume Increase: 60%')
    }

    function level3() {
        setMsg('valume Full')
    }


    function VolumeUpClick() {
    //   setTimeout(level1, 2000)
    //   setTimeout(level2, 6000)
    //   setTimeout(level3, 10000)
    setTimeout(level1, 1000)
    thread.current = setTimeout(level2, 6000)
    setTimeout(level3, 10000)
    }

    function CancelClick() {
        alert("Level  2 Canceled")
        clearTimeout(threat.current)
    }


    return(
        <div className="container-fluid p-4">
            <button onClick={VolumeUpClick} className="btn btn-outline-primary bi bi-volume-up"></button>
            <button onClick={CancelClick} className="btn btn-warning mx-2">Cancel Level2</button>

            <p className="fs-4 fw-bold">{msg}</p>
        </div>
    )
}