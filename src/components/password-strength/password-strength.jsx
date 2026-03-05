import { useState } from "react"

export function PasswordStrength() {

    const [password, setpassword] =useState('')
    const [progressClass, setProgreassClass] =useState('')
    function VerifyPassword(e) {
        if(e.target.value.match(/(?=.*[A-Z])\w{4, 10}/)) {
            setpassword('Strong Password')
            setProgreassClass('progres')
        }else{
            if(e.target.value.length<4) {
                setpassword('Poor Password')
                
            }else{
                setpassword('Weak Password')
                
            }
        }
    }

    return(

        


        <div className="container-fluid p-3">
            <h3>Register</h3>
            <dl className="w-25">
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={VerifyPassword} className="form-control"/>
                </dd>
                <dd className="progress">
                    <div className={progressClass}></div>
                </dd>
                <dd>{password}</dd>
            </dl>
        </div>
    )
}