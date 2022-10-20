import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'
const SignUP = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.Confirm.value;
        
        if( password.length < 6 ){
            setError("your password should be 6 character or more")
             return;
         }

        if( password !== confirm){
           setError("your password did not match")
            return;
        }

        //creating user
            createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
               console.error(error)
              });

    }
    return (
        <div className='login-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id=''  placeholder='Your email address' />
                </div>
                <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id=''  placeholder='Your password' />
                </div>
                <div className='form-control'>
                <label htmlFor="Confirm">Confirm Password</label>
                <input type="password" name='Confirm' id=''  placeholder='Your password' />
                </div>
                <p className='text-error'>{error}</p>
                <button className='submit-button'>Submit</button>
            </form>
            <p className='login-text'>Already Have an account? <Link className='login-text' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUP;