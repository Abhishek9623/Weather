import { useState } from "react";
import { DataGrid } from "../../controlled-componants/data-grid";

export function ControlleDemo() {
    const [employees] = useState([
        {firstName:'Kiran', LastName:'Kumar', salary:45000},
        {firstName:'Pakya', LastName:'Chahavala', salary:45000},
        {firstName:'Tilak', LastName:'Verma', salary:459000},
    ])

    const [products] = useState([
        {Name:'TV', Brand:'Samsung', price:2400},
        {Name:'Mobile', Brand:'Xiomi Redmi 9 power', price:11500},
        {Name:'Watch', Brand:'Boat', price:3490},
    ])


    return(
        <div className="container-fluid">
            <h2>Controlled Demo</h2>
            <DataGrid theme={'bg-none'} caption="Employee Datails" data={employees} />
            <DataGrid caption="Product Details" data={products}/>
        </div>
    )
}