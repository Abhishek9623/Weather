import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function AdminLogin() {
    const [cookies, setCookies, removeCookies] = useCookies(['admin_id'])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            admin_id: '',
            password: ''
        },
        onSubmit:(admin)=> {
            axios.get(`http://localhost:4400/admin?admin_id=${admin.admin_id}`)
            .then(response=>{
                if(response.data.length > 0) {
                    if(response.data[0].password===admin.password) {
                        setCookies('admin_id', admin.admin_id)
                        navigate('/admin-dashboard')
                    } else {
                        alert('Invalid Password')
                    }
                } else {
                    alert('Invalid Admin Id')
                }
            })
            .catch(error => {
                console.error("There was an error during login:", error);
                alert("Login failed. Please try again later.");
            });
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Admin Login</h3>
                <dl>
                    <dt>Admin ID</dt>
                    <dd><input name="admin_id" value={formik.values.admin_id} onChange={formik.handleChange} type="text"/></dd>

                    <dt>Password</dt>
                    <dd><input name="password" value={formik.values.password} onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-warning" type="submit">Login</button>
            </form>
        </div>
    )
}