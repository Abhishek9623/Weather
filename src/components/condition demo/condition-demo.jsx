import { useState } from "react"
import { DebounceDemo } from "../debounce demo/debounce-demo"
import { FormDemo } from "../form demo/form-demo"


export function ConditionDemo() {
    // function handleSigninClick() {
    //     sessionStorage.setItem("uname", "john")
    //     location.reload()
    // }
    // function handleSignoutClick() {
    //     sessionStorage.removeItem("uname")
    //     localStorage.reload()
    // }

    const [component, setComponent] = useState()
    const [user, setUser] = useState()

    function handleNameChange(e) {
        setUser(e.target.value)
    }

    function handleSigninClick() {
        if(user==="john") {
            setComponent(<DebounceDemo />)
        } else {
            setComponent(<FormDemo />)
        }
    }

    return(
        <div className="container-fluid">
            <h2>Condition Demo</h2>
            <input type="text" onChange={handleNameChange} />
            {/* <nav className="d-flex justify-content-between p-2 border-1 border">
                <div className="fs-4 fw-bold">Shopping</div>
                <div>
                    {
                       (sessionStorage.getItem("uname")===null)?<button onClick={handleSigninClick} className="btn btn-danger">Sign in</button>:<span>{sessionStorage.getItem("uname")} <button onClick={handleSignoutClick} className="btn btn-success">Sign out</button> </span>
                    }
                </div>

            </nav> */}
            <button onClick={handleSigninClick}>Sign in</button>
            <hr />
                <div>
                component
                </div>







        </div>
    )
}