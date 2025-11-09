import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';

import { toast } from 'react-toastify';

const UserProfile = () => {
    const {user,signOutUser} = use(AuthContext);
    const [isToggle , setIsToggle] = useState(false);

    const handleToggle=()=>{
        setIsToggle(!isToggle)
    }
    
    const photo = user?.photoURL;
    
    const handleSignOut =()=>{
        signOutUser()
        .then(() =>{
            toast.success('SignOut Successfully')
            
        })
        .catch( err => {toast.error(err.message)})
    }


    return (
        // <div className="dropdown dropdown-end">
        //     <img src={photo} tabIndex={0} role="button" className="w-10 h-10 rounded-full"/>
        //     <ul tabIndex="-1" className="dropdown-content menu bg-white flex flex-col items-center rounded-box z-1 w-52 p-2 shadow-sm">
        //         <li><Link to={'/myProfile'} className='text-xl'>{user?.displayName}</Link></li>
        //         <li><button onClick={handleSignOut}>Sign Out</button></li>
        //     </ul>
        // </div>
        <div className="relative">
            <img src={photo} tabIndex={0} role="button" onClick={()=>{handleToggle()}} className="w-10 h-10 rounded-full"/>

            {
                isToggle &&
                <ul tabIndex="-1" onClick={()=>{setIsToggle(!isToggle)}} className="absolute menu bg-emerald-400  flex flex-col items-center rounded-box z-1 w-30 p-2 right-2 top-14">
                    <li><Link to={'/myProfile'} className='text-xl text-white'>{user?.displayName}</Link></li>
                    <li><button onClick={handleSignOut} className='bg-red-700 hover:bg-red-500 my-2 px-3 py-2 rounded-lg text-white'>Sign Out</button></li>
                </ul>
            }
            
        </div>
    );
};

export default UserProfile;