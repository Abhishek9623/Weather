import { useRef, useState } from "react"
import { useFormik } from "formik"

export function FormDemo() {

    function ValidetUser(user) {
        var errors = {UserName:'',Email:'',Mobile:'',City:''}

        if(user.UserName.length===0) {
            errors.UserName = 'User Name Required'
    } else {
        if(user.UserName.length<4) {
            errors.UserName = 'Name is too short'
        }else{
            errors.UserName = ''
        }
    }
    if(user.City==="-1") {
        errors.City = 'Please select your city'
    } else {
        errors.City = ''
    }

    if(user.Mobile.length===0){
        errors.Mobile = 'Mobile Required'
    } else {
        if(user.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = ''
        } else {
            errors.Mobile = 'Invalid Mobile: +91 & 10 digits'
        }
    }
    return errors

    }






    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Mobile: ''
        },
        validate: ValidetUser,
        onSubmit : (user) => {
            console.log(user)
        }
    })

    // let UsernameRef = useRef()
    // let EmailRef = useRef()
    // let MobileRef = useRef()

   
    //function handleSubmit(e) {
        
        //e.preventDefault()
       //console.log({UserName:UsernameRef.current.value, Email:EmailRef.current.value, Mobile:MobileRef.current.value})
    //}

    return(
        <div className="container-fluid p-3">
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange} name="Email" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option>Beed</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
           
        </div>
    )
}
