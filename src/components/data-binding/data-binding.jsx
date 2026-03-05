import { useEffect, useState } from "react"
export function DataBinding() {
    const [categories] = useState(['All', 'Electronics'])
    useEffect(() => {},)
    return(
        <div className="container p-4">
            <h2>Array</h2>
            <ol>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ol>
        </div>
    )
}







export function DataBinding() {

    categories.map(category => <li>{category}</li>)
}