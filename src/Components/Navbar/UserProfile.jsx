import React, { Suspense, use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyProfile from './My Profile/MyProfile';
import Spinner2 from '../Spinner/Spinner2';

const UserProfile = () => {
    const { user } = use(AuthContext);
    const [isToggle, setIsToggle] = useState(false);
    const updateUserProfilePromise = fetch(`https://rent-wheels-server-sigma.vercel.app/users`).then(res=>res.json())

    const handleToggle = () => setIsToggle(!isToggle);

    const photo = user?.photoURL

    return (
        <div className="relative">
            
            <img src={photo} alt="User" onClick={handleToggle} className="w-10 h-10 rounded-full cursor-pointer" />

            
            {isToggle && (
                <div className="absolute right-0 mt-3 z-9999 rounded-2xl w-[300px] p-3" onClick={(e) => e.stopPropagation()} >
                    <Suspense fallback={<Spinner2 />}>
                        <MyProfile updateUserProfilePromise={updateUserProfilePromise} handleToggle={handleToggle} keepOpen={() => setIsToggle(true)} />
                    </Suspense>
                    
                </div>
            )}
        </div>
    );
};

export default UserProfile;