import React from "react";

export class DemoClass extends
React.Component
{
    constructor() {
        super()
        this.state = {
            msg:''
        }
        this.handleInsertClick=this.handleInsertClick.bind(this)
    }
    handleInsertClick(e) {
        this.setState({
            msg: 'Record Inserted'
        })
    }   
    handleDeleteClick() {
        this.setState({
            msg:'Deleted Successfully...'
        })
    }
    handleUpdateClick() {
        this.setState({
            msg:'updated'
        })
    }
    render() {
        return(
            <div className="container-fluid p-2">
                <button onClick={this.handleInsertClick}>Insert</button>
                <button className="mx-2" onClick={this.handleDeleteClick.bind(this)}>Deleted</button>
                <button onClick={()=>this.handleUpdateClick()}>Update</button>
                <p>{this.state.msg}</p>
            </div>
        )

    }
}