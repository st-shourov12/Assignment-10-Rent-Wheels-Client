import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyProfile = ({handleToggle, updateUserProfilePromise}) => {
    const {user , setUser, signOutUser} = use(AuthContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const auth = getAuth();
    const photo = auth.currentUser.photoURL;

    // const [updateUserProfile, setUpdateUserProfile] = useState([]);
    const updateUserProfile = use(updateUserProfilePromise);
    
    const myProfile = updateUserProfile.filter(p=> p?.email === user?.email);
    
    console.log(myProfile);

    // useEffect(() => {
    // updateUserProfilePromise
    //     .then(data => setUpdateUserProfile(data))
    //     .catch(err => console.error(err));
    // }, [updateUserProfilePromise]);

    const handleUpBtn = () => {
        setIsUpdate(!isUpdate)
        
    }

     const handleSignOut =()=>{
            signOutUser()
            .then(() =>{
                toast.success('SignOut Successfully')
                
            })
            .catch( err => {toast.error(err.message)})
        }

    const handleUpdate = (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const photoURL = event.target.photoURL.value.trim();
        const updateData = {};
        if (name) updateData.displayName = name;
        if (photoURL) updateData.photoURL = photoURL;

        if(!name && !photoURL){
            return(
                toast.error('Update Name or photo')
            )
        }
        updateProfile(auth.currentUser, updateData)
        .then(() => {
            toast.success("User profile updated!");
            setUser({
            ...user,
            displayName: name || user?.displayName,
            photoURL: photoURL || user?.photoURL,
            });

            
        const userProfile = myProfile[0];
        
        if (userProfile && userProfile._id) {
            fetch(`http://localhost:4000/users/${userProfile._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name : name ,
                    image : photoURL
                }),
            })
            .then(response => response.json())
            .then(data => {
                data
            })
            .catch(error => {
               
                toast.error("Error" + error.message);
            });
        } else {
            
            toast.error("User profile not found in database");
        }
    })
    .catch((error) => {
        toast.error("Profile update failed: " + error.message);
    });

    event.target.reset();
}
    return (
        <div className='bg-[#1E293B] rounded-2xl'>
            
            
            <div className="card-box max-w-[450px] rounded-xl mx-auto p-5">
            {
                isUpdate ? 
                <h2 className="text-xl text-center font-bold  ">Update Profile</h2> :
                <h2 className="text-xl text-center font-bold ">
                    My Profile
                </h2>
            }

                <figure className='flex justify-center'>
                    <img src={photo} alt="" className='w-[50px] h-[50px] rounded-full'/>
                </figure>
                <h2 className='text-xl font-bold text-center '>
                    {user?.displayName}
                </h2>
                <h2 className='text-xl font-semibold text-gray-100 text-center'>
                    {user?.email}
                </h2>
                {
                    !isUpdate && 
                    <div className="flex flex-col sm:w-10/12 mx-auto mt-2 gap-2 justify-center">
                         <button type='button' className=' px-2 py-1 rounded-lg bg-green-700 hover:bg-emerald-500 text-white' onClick={handleUpBtn}>Update Profile</button>
                         <button onClick={handleSignOut} className='bg-red-700 hover:bg-red-500 px-2 py-1 rounded-lg text-white'>Sign Out</button>
                         <button onClick={()=>{handleToggle()}} className='bg-[#06B6D4] hover:bg-blue-500 px-2 py-1 rounded-lg text-white'>Close</button>
                    </div>
                }

                {
                    isUpdate &&

                    
                        <div className="">
                            
                            <form onSubmit={handleUpdate} className=''>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input defaultValue={user?.displayName} type="text" name='name' className="input w-full text-black" placeholder="Name" />
                                    
                                    <label className="label">PhotoURL</label>
                                    <input defaultValue={user?.photoURL} type="text" name='photoURL' className="input w-full text-black" placeholder="PhotoURL" />
                                    

                                    
                                    <button className="px-3 py-2 rounded-lg bg-green-700 hover:bg-emerald-500 text-white mt-4">Update</button>
                                    <button onClick={()=>{setIsUpdate(false)}} type='button' className="px-3 py-2 rounded-lg bg-red-700 hover:bg-red-500 text-white mt-4">Cancel</button>
                                </fieldset>
                            </form>
                            
                            
                        </div>
           
                }
            </div>
            
        </div>
    );
};

export default MyProfile;