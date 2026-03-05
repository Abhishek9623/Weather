import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-product";
import { FakestoreDetails } from "./fakestore-details";
import { FakeStoreSearch } from "./fakestoresearch";
import { FakestoreResults } from "./fakestore-result";

export function FakestoreIndex() {
    return(
        <div className="container-fluid">
           <BrowserRouter>
           <header className="bg-dark text-white text-center p-2">
           <h3>FakeStore Index</h3>
           </header>
           <section className="mt-4">
                <Routes>
                    <Route path="/" element={<FakestoreHome />} />
                    <Route path="products/:category" element={<FakestoreProducts />}>
                    <Route path="details/:id" element={<FakestoreDetails />}/>
                    </Route>
                    <Route path="search" element={<FakeStoreSearch />} />
                    <Route path="results" element={<FakestoreResults />} />
                    <Route path="*" element={<div><h3>Not found - path you requsted not found.</h3></div>}/>
                </Routes>
           </section>
           </BrowserRouter>
        </div>
    )
}