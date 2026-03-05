import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function FakestoreDetails() {

    const params = useParams()
    const [product, setProducts] = useState({id:0, title:null, description:null, price:0, rating:{rate:0, count:0}, image:null})


    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProducts(response.data)
        })
    }, [params.id])


    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <img src={product.image} height="200" width="300"/>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
            </dl>
        </div>
    )
}