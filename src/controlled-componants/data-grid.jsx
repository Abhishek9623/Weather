export function DataGrid(props) {
    return(
        <div className="table-responsive">
            <table className={`table ${props.theme} table-hover`}>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                {
                    (props.data && props.data.length > 0) ? Object.keys(props.data[0]).map(field=><th key={field}>
                        {field}
                    <span className="dropdown">
                            <button data-bs-toggle="dropdown" data-bs-target={`#menu-${field}`} className="dropdown-toggle btn bi bi-three-dots-vertical"></button>
                            <ul className="dropdown-menu" id={`menu-${field}`}>
                                <li className="dropdown-item"> <span className="bi bi-funnel"></span> Filter </li>
                                <li className="dropdown-item"> <span className="bi bi-sort-alpha-down"></span> Sort Ascending </li>
                                <li className="dropdown-item"> <span className="bi bi-sort-alpha-up"></span> Sort Descending </li>
                            </ul>
                    </span>
                    </th>) : null
                   
                }
                <th>Modifiers</th>
                </tr>
            </thead>
            <tbody>
                {
                    (props.data || []).map((item, index)=>
                        <tr key={index}>

                                {
                                    Object.keys(item).map((field, i)=><td key={i}>{item[field]}</td>)
                                }
                                <td>
                                    <button className="btn btn-danger bi bi-trash"></button>
                                    <button className="btn btn-warning bi bi-pencil-fill mx-2"></button>
                                </td>
                        </tr>
                    )
                }
            </tbody>
            </table>
        </div>
    )
}