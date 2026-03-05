import axios from "axios";
import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";

export function FakestoreResults() {
      const [serachparams] = useSearchParams()

      const [products, setProducts] = useState([{id:0, title:null, description:null, price:0, rating:{rate:0, count:0}, image:null}])

      useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${serachparams.get('category')}`)
        .then(response=>{
            setProducts(response.data)
        })
      },[])

      return(
        <div>
            <h2>Search Results</h2>
            <div>
                {
                    products.map(product=>
                        <img src={product.image} key={product.id} width="100" height="100" className="mx-2"/>
                    )
                }
            </div>
        </div>
      )
}