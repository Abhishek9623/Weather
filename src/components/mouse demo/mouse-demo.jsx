
import { useState } from "react"
import './mouse-demo.css'

export function MouseDemo() {

    const [animationObject, setAnimationObject] = useState({animationName:'spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'})

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img src="react.svg" style={animationObject} width="100" height="100"/>
        </div>
    )
}