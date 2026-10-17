import { useState } from 'react';

import './LoginForm.css';

function LoginForm(){
    const [formData , setformData] = useState({email: "", password: ""});
    const [error , setError] = useState ({});

    const validate = () =>{
        let newError = {};
        if(!formData.email){
            newError.email = "Email is required"
        }
        if(!formData.password){
            newError.password = "Password is required"
        }

        setError(newError)
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(validate ()){
            alert("Form Submitted");
            console.log(formData)
        }
    }
  
    
    const handleChange = (e) => {
        setformData ({...formData , [e.target.name] : e.target.value})
    }
    




    return(
        <div className = 'login-container'>
            <h1 className="login-text">Login</h1>
            
            <p className="login-subtext">Welcome back! Please enter your credentials to log in.</p>

            <form className = 'form-container'onSubmit={handleSubmit}>
                <div className ="field">

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder="janedoe@gmail.com" id="email" name="email"  onChange = {handleChange} value = {formData.email} />
                    <p id="email-error" className="error-message">{error.email}</p>
                </div>
                    
                <div className = "field">
                    <label htmlFor="password" className ="form-label">Password</label>
                    <input type="password" placeholder="Enter your password" id="password" name="password" onChange = {handleChange}  value = {formData.password}  />
                    <p id="password-error" className ="error-message">{error.password}</p>
                </div>
                <p className ="forgot-password"><a href="#">Forgot Password?</a></p>

                    
               <button type="submit" className ="btn">Log In</button>

            </form>
       </div>
    )
}

export default LoginForm