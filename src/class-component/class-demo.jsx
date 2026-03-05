import axios from "axios";
import React from "react"

export class ClassDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
       
           axios.get('http://localhost:4400/videos')
           .then(response=>{
            this.setState({
                videos : response.data
            })
           })
           .catch(error => {
               console.error("Error fetching videos:", error);
           })
    }


    render() {
        return(
            <div className="container-fluid">
               <h2>Videos</h2>
               {
                this.state.videos.map(video=>
                    <iframe key={video.id} src={video.url} title="Video Player" width="400" height="500"></iframe>
                )
               }
            </div>
        )
    }
}