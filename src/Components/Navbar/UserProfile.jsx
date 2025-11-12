import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyProfile from './My Profile/MyProfile';

const UserProfile = () => {
    const { user } = use(AuthContext);
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => setIsToggle(!isToggle);

    const photo = user?.photoURL || "https://via.placeholder.com/40";

    return (
        <div className="relative">
            
            <img src={photo} alt="User" onClick={handleToggle} className="w-10 h-10 rounded-full cursor-pointer" />

            
            {isToggle && (
                <div className="absolute right-0 mt-3 z-9999 rounded-2xl w-auto p-3" onClick={(e) => e.stopPropagation()} >
                    <MyProfile handleToggle={handleToggle} keepOpen={() => setIsToggle(true)} />
                </div>
            )}
        </div>
    );
};

export default UserProfile;