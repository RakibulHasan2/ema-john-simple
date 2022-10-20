import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from =    location.state?.from?.pathname || '/'
    
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      //login area
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch((error) => {
           console.error(error)
          });
    }

    return (
        <div className='login-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id=''  placeholder='Your email address' />
                </div>
                <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id=''  placeholder='Your password' />
                </div>
                <button className='submit-button'>Submit</button>
            </form>
            <p className='login-text'>New to ema john <Link to='/signup' className='login-text'>Create a New Account</Link></p>
           
        </div>
    );
};

export default Login;