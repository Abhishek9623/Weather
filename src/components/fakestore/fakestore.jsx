import axios from "axios"
import { useEffect, useState } from "react"


export function FakeStore() {

    const [categries, setCategorie]  = useState()
    function LoadCategories() {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response =>{
            setCategorie(response.data)
        })
    }
    useEffect(()=>{
        LoadCategories()
    },[])

    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 mt-3">
                <div className="fs-4 fw-bold">Fakestore</div>
                <nav>
                    <div className="input-group">
                      <input type="text" placeholder="Search FakeStore.com" className="form-control"/>
                      <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>
                <div>
                    <button className="bi btn btn-warning bi-cart4 m-2 position-relative"><span className="badge rounded rounded-circlebg bg-danger text-white position-absolute">0</span></button>
                </div>
            </header>
            <section className="mt-4 row">
                <div className="col-2">
                <div>
                    <label className="form-label">Select Category</label>
                </div>
                <div>
                    <select className="form-control">
                        {
                            categries.map(category=><option key={category}>{category}</option>)
                        }
                    </select>
                </div>
                <div className="col-10">



                </div>
                </div>
            </section>
        </div>
    )
}