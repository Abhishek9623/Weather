

// const Login = ()=> (<div> </div>)
// export default Login;

//or

// export function Login()
// {
//     return (
//         <div>

//         </div>
//     )
// }

//or 
// const Login = function () {
//     return (
//         <div></div>
//     )
// }
// export default Login

// export function Login ()
// {
//     return(
//         <div>
//             <h2>User Login</h2>
//             <form>
//               <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text"/></dd>
//                 <dt>Password</dt>
//                 <dd> <input type="password" /></dd>
//               </dl>
//               <button>Login</button>
//             </form>
//         </div>
//     )
// }


import "./login.css"
export function Login()
{
  return(
    <div className="login-form">
     
      <form className="form-style alert alert-dismissible alert-warning">
      <h2 className="bi bi-person-circle">User Login</h2>
      <button className="btn btn-close" data-bs-dismiss="alert"></button>
        <dl>
        <dt>User Name</dt>
        <dd><input type="text" className="form-control"/></dd>
        <dt>password</dt>
        <dd><input type="password" className="form-control"/></dd>
        </dl>
        <button className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  )
}