import { TextField } from "@mui/material";
import { Button } from "bootstrap";

export function FakeStoreSearch() {
    return(
        <div>
            <h3>Search Products</h3>
            <form method="get" action="/results">
                <input type="text" name="category"/>
                <button type="submit">Search</button>
            </form>
            <h2 className="mt-4">React MUI</h2>
            <form action="/results">
            <div className="w-25">
                <div className="w-25">
                <div>
                    <TextField type="text" name="category" label="Search Fakestore" variant="standard" className="w-100"></TextField>
                </div>
                <div className="mt-4">
                    <Button type="submit" variant="contained" color="error" className="w-100"></Button>
                </div>
                </div>
            </div>

            </form>
        </div>
    )
}