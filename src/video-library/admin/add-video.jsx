import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function AddVideo() {
    const [categories, setCategories] = useState([{category_id:0, category_name:''}])
    const navigate = useNavigate()

    function LoadCategories() {
        axios.get('http://localhost:4400/categories')
        .then(response=>{
            response.data.unshift({category_id:-1, category_name:'select a category'})
            setCategories(response.data)
        })
    }
    useEffect(()=>{
        LoadCategories()
    },[])

    const formik = useFormik({
        initialValues : {title:'', description:'', url:'', likes:0, dislikes:0, views:0, comments:'', category_id:-1},
        onSubmit: (video) =>{
            axios.post('http://localhost:4400/videos', video)
            alert('Video Added Successfully...')
            navigate('/admin-dashboard')
        }
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Add new video</h3>
                <dl className="row w-50">
                    <dt className="col-3">Title</dt>
                    <dd className="col-9"><input type="text" value={formik.values.title} onChange={formik.handleChange} name="title"/></dd>

                    <dt className="col-3">Description</dt>
                    <dd className="col-9"><input type="text" value={formik.values.description} onChange={formik.handleChange} name="description"/></dd>

                    <dt className="col-3">URL</dt>
                    <dd className="col-9"><input type="text" value={formik.values.url} onChange={formik.handleChange} name="url"/></dd>

                    <dt className="col-3">Views</dt>
                    <dd className="col-9"><input type="number" value={formik.values.views} onChange={formik.handleChange} name="views"/></dd>

                    <dt className="col-3">Likes</dt>
                    <dd className="col-9"><input type="number" value={formik.values.likes} onChange={formik.handleChange} name="likes"/></dd>

                    <dt className="col-3">Dislikes</dt>
                    <dd className="col-9"><input type="number" value={formik.values.dislikes} onChange={formik.handleChange} name="dislikes"/></dd>

                    <dt className="col-3">Comments</dt>
                    <dd className="col-9"><input type="text" value={formik.values.comments} onChange={formik.handleChange} name="comments"/></dd>

                    <dt className="col-3">Category</dt>
                    <dd className="col-9">
                        <select name="category_id" value={formik.values.category_id} onChange={formik.handleChange}>
                            {
                                categories.map(category=>
                                    <option value={category.category_id} key={category.category_id}> {category.category_name.toUpperCase()} </option>
                                )
                            }
                        </select>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-warning">Add Video</button>
                <Link className="btn btn-danger mx-2" to="/admin-dashboard">Cancel</Link>
            </form>
        </div>
    )

}