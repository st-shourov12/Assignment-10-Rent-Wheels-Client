import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext'; 
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa6';

import Spinner from '../Spinner/Spinner';
import useCars from '../UseHook/UseCars';




const Login = () => {
    const {signInUser,setUser,user, signInWithGoogle} = use(AuthContext);

    const [showPassword , setShowPassword] = useState(false);
    const {loading } = useCars();
    const location = useLocation();
    const navigate = useNavigate();
    

    if (loading) {
        return <Spinner />
    }

    if(user){
        return (navigate(location?.state || '/'))
    }

    const handleLogin = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        signInUser(email, password)
        .then(res => {
            toast.success(`Login Successfully`);
            setUser(res.user);
            navigate(location?.state || '/');
           
            
        })
        .catch( err=> toast.error(err.message))

        event.target.reset()
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
                .then( (res) =>{
                    
                    const newUser = {
                        name: res.user.displayName,
                        email: res.user.email,
                        image : res.user.photoURL
                    }
        
                    fetch(`https://rent-wheels-server-sigma.vercel.app/users`,{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                    .then(res=> res.json())
                    .then(data=>console.log(data))
                    toast.success('Sign In Successfully')
                    
                    navigate(location?.state || '/')
                })
                .catch(error =>{
                    toast.error(error.message)
                    
                })
    }

    return (
        <div className="hero bg-[#F7FAFC] p-5 sm:p-10 lg:p-20">
            <title>Rent Wheels - Log In</title>
  
                <div className="card bg-[#16213E] text-white w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label text-white">Email</label>
                                <input type="email" name='email' className="input w-full text-black" placeholder="Email" />
                                <label className="label text-white">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} name='password' className="input w-full text-[#16213e] relative" placeholder="Password" required/>
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800">
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                                
                                <button type='submit' className="btn bg-white border-0 shadow-none text-[#16213E] mt-4">Login</button>
                            </fieldset>
                        </form>

                        <div className="grid grid-cols-3 items-center">
                                <div className='bg-white h-px'></div>
                                <div className='justify-self-center '>Or</div>
                                <div className='bg-white h-px'></div>
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                       <p>New to our website? <Link className='text-blue-500 hover:text-blue-800' to={'/register'}>Register</Link></p>
                        
                    </div>
                </div>
        </div>
        
    );
};

export default Login;