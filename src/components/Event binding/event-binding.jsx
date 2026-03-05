import axios from "axios"
import { useState } from "react"

export function EventBinding() {
    // function handleInsertClick(id, name, cities,e) {
    //     console.log(`id=${id}\nname=${name}\ncities=${cities}`)
    //     console.log(`${e.target.value}\n${e.clientX}`)
    // }

    // const [user, setUser] =useState('Abhi')

    // function handleNameChange(e) {
    //     setUser(e.target.value)
    // }


    const [mobiles, setMobile] =useState([{img_src:null}])
    function LoadMobiles() {
        axios.get("mobile.json")
        .then(response => {
            setMobiles(response.data)
        })
    }

    useState(() => {

    },[])



    return(
        <div className="p-4">
            <div className="row">
                <div className="col-2">
                    {
                        mobiles.map(mobile =>
                            <div className="my-4" key={mobile}>
                                <img src={mobile.img_src} width="100" height="100"/>
                            </div>
                        )
                    }
                </div>
                <div className="col-10">

                </div>
            </div>
        </div>
    )
}