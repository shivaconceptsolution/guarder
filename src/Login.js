import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login()
{
    const[uname,setUname] = useState(undefined)
    const[upass,setUpass] = useState(undefined)
    const[res,setRes] = useState(undefined)
    const navigate = useNavigate()
    function validateLogin(e)
    {
      
       if(uname==="admin@gmail.com" && upass==="12345")
       {
          localStorage.setItem('loggedin','abcd')
          navigate("/admin")
       }
       else
       {
        setRes('Invalid Userid and Password')
       }
       e.preventDefault()
    }
    return(<div>
        <div className="row">
            <div className="col-md-4">
                  <h1>Login Here</h1>
                  {res}
            </div>
            <div className="col-md-8">
            <div className="container"> 
                <div className="row justify-content-center">
                     <div className="col-md-6"> 
                        <div className="card mt-5">
                             <div className="card-header text-center"> 
                                <h3>Login</h3> </div>
                                 <div className="card-body"> 
                                    <form onSubmit={validateLogin}> 
                                        <div className="mb-3"> 
                                        <label for="email" className="form-label">Email address</label> 
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>{setUname(e.target.value)}} /> </div>
                                         <div className="mb-3"> <label for="password" className="form-label">Password</label> <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setUpass(e.target.value)}} /> </div> 
                                         <div className="mb-3 form-check"> <input type="checkbox" className="form-check-input" id="rememberMe" /> 
                                         <label className="form-check-label" for="rememberMe">Remember Me</label> </div> 
                                         <button type="submit" className="btn btn-primary w-100">Login</button> </form> 
                                         </div>
                                          <div className="card-footer text-center"> <a href="#">Forgot your password?</a> </div> 
                                          </div>
                                           </div>
                                            </div> 
                                            </div>
            </div>
        </div>
    </div>)
}