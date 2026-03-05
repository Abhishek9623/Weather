import { useEffect, useState } from "react"
import moment from "moment"

export function DataBinding() {
   const [today, setToday] = useState(new Date('2025-09-16'))
   const [pattern] = useState(/\+91\d{10}/)
   const [mobile] = useState('+919623719985')

    return(
       <div className="container p-4">
          <h2>Data Binding</h2>
          <p>{(mobile.match(pattern))? "Verified":"Invalid Mobile"}</p>
       </div>
    )
}