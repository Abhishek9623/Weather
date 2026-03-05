
import { useForm } from "react-hook-form"
import { Navbar } from "../../controlled-componants/navbar"



export function HookFormDemo() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const submit = (data) => {
        console.log(data)
    }
    return(
        <div className="container-fluid p-2">
            <Navbar theme='bg-danger text-white' brand="Shopping" menu={['Home', 'Help', 'Shop', 'Pages', 'Docs', 'Offers']} /> 
            
            <h3>Register</h3>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName",{ required:true, minLength: 4})} name="UserName" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")?<span>UserName is required</span>:<span></span> &&
                            (errors.UserName?.type==="minLength")?<span>Name too short</span>:<span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...register("Mobile",{required:true, pattern:/\+91\d{10}/})} name="Mobile" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.Mobile?.type==="required")?<span>Mobile is required</span>:<span></span> &&
                            (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>
                        }
                    </dd>
                </dl>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}