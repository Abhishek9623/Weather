import React, {use} from "react"

function FetchVideo() {
    return fetch('http://localhost:4400/videos/1').then(response=> response.json())
}

function ViewVideo() {
    const video = use(FetchVideo())
    return <p>{video.title}</p>
}

export function SuspenseDemo() {
    return(
        <div className="container-fluid">
            <React.Suspense fallback={<p>Loading...</p>}>
                <ViewVideo />
            </React.Suspense>
        </div>
    )
}