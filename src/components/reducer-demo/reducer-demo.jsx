import { useReducer } from "react"

let initialState = {
    viewersCount : 0
}
function reducer(state, action) {
    switch(action.type) {
        case "join":
            return {viewersCount: state.viewersCount +1 }
        case "exit":
            return {viewersCount: state.viewersCount -1}
    }
}

export function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleJoinClick() {
        dispatch({type: 'join'})
    }
    function handleExitClick() {
        dispatch({type: 'exit'})
    }




    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleJoinClick} className="btn btn-outline-success">Join</button>
                <button onClick={handleExitClick} className="btn btn-outline-warning mx-2">Exit</button>
            </div>
            <div className="mt-4">
                <iframe width="800" height="400" src="https://www.youtube.com/embed/M1_a5xf6xzY"></iframe>
                    <div className="mt-4 "><span className="fw-bold bi bi-eye-fill"> {state.viewersCount}</span> Watching </div>
                </div>
            </div>
        )
    }