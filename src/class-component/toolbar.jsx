import React from "react";

export class Toolbar extends
React.Component
{
    constructor() {
        super()
    }
    render() {
        return(
            <nav className="w-50 border border-2 p-2">
                <h3>{this.props.title}</h3>
                <ul className="list-unstyled">
                    {
                    this.props.menuItems.map(item=> <li key={item}>{item}</li>)
                    }
                </ul>
            </nav>
        )
    }
}