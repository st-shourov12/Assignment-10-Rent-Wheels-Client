import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useCars from '../UseHook/UseCars';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react'; 
import bookingSuccess from '../CarDetails/Animations/Done.json';

const AddCar = () => {

    const {user} = use(AuthContext);
    const {loading} =useCars();
    const [showAnimation, setShowAnimation] = useState(false);
    

    if (loading) {
       return <Spinner />
    }
    // const confirmModalRef = useRef();




    // const handleModal = ()=> {
    //     confirmModalRef.current.showModal()
    // } 

    const handleAddCar = (e)=>{
        e.preventDefault();
        
    
        const car_name = e.target.carName.value;
        const categorys = e.target.category.value;
        const rent_Price = e.target.rentPrice.value;
        const locations = e.target.location.value;
        const img = e.target.img.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const describe = e.target.describe.value;

        const newCar ={
            carName : car_name,
            description: describe,
            category: categorys,
            rentPrice: rent_Price,
            location: locations,
            imageUrl: img,
            providerName: name,
            providerEmail: email,
            availability: "Available"

        };

        fetch(`https://rent-wheels-server-sigma.vercel.app/cars`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ newCar})
        })
        .then(res=> {res.json()})
        .then(data =>{
           data;
        });
        toast.success(`You added ${car_name} successfully`);

        setShowAnimation(true);

                        
        setTimeout(() => {
            setShowAnimation(false);
        }, 5000);
  
        
    e.target.reset()
    }
    return (
        <div className='relative'>
            <title>Rent Wheels - Add Car</title>


            {showAnimation && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-xl z-10">
                            <Lottie animationData={bookingSuccess} loop={false} className="w-48 h-48" />
                            <h2 className="text-black text-xl font-bold mt-2">Car added Successfully</h2>
                        </div>
            )}

            <div className='max-w-[90%] lg:max-w-[70%] bg-[#16213E] text-white mx-auto p-5 sm:p-10 border border-gray-600 my-10 xl:my-20 rounded-2xl'>
                <h2 className='text-center text-4xl'>Add a Car</h2>

                <form onSubmit={handleAddCar} className='p-5 flex flex-col gap-2'>

                    <div className='flex flex-col sm:flex-row gap-1'>
                        <fieldset className='sm:w-1/2'>

                            <label className="label text-white">Car Name</label>
                            <input name='carName' required type="text" className="input text-black w-full" placeholder="Car" />
                        </fieldset>
                        <fieldset className='sm:w-1/2'>

                            <label className="label text-white">Category</label>
                            <select name='category' defaultValue="SUV" className="select text-black w-full">
                                <option disabled={true}>Select a Category</option>
                                <option>SUV</option>
                                <option>Sedan</option>
                                <option>Luxury</option>
                                <option>Electric</option>
                                <option>Hatchback</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-1">
                        <fieldset className='sm:w-1/2'>
                            <label className="label w-full text-white">Rent Price</label>
                            <input required name='rentPrice' type="number" className="input text-black w-full" placeholder="Rent Price(Per day)" />
                        </fieldset>
                        <fieldset className='sm:w-1/2'>
                            <label className="label text-white">Location</label>
                            <input required name='location' type="text" className="input text-black w-full" placeholder="Location" />

                        </fieldset>
                    </div>
                    
                    
                    <label  className="label text-white">Image URL</label>
                    
                    <input name='img' type="url" required placeholder="imgURL" pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$" title="Must be valid URL" className="input text-black w-full validator" />  
                    <p className="validator-hint">Must be valid URL</p>

                    <div className="flex flex-col sm:flex-row gap-1">
                        <fieldset className='sm:w-1/2'>
                            <label className="label text-white">Provider Name</label>
                            <input defaultValue={user?.displayName} readOnly name='name' type="text" className="input text-black w-full" placeholder="" />

                        </fieldset>
                        <fieldset className='sm:w-1/2'>
                            <label className="label text-white">Provider Email</label>
                            <input defaultValue={user?.email} readOnly name='email' type="email" className="input text-black w-full" placeholder="" />
                        </fieldset>
                    </div>
                    
                    <legend className="fieldset-legend text-white">Description</legend>
                    <textarea required name='describe' className="textarea text-black w-full h-20" placeholder="Describe your car"></textarea>

                    <div className="flex justify-center">
                        <button className='px-4 bg-[#DC2626] text-white  py-3 rounded-xl shadow-0'>Add Car</button>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                        {/* <dialog ref={confirmModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-black">Are you sure to add this Car</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action"> type='button' onClick={()=>{handleModal()}*/}
                                
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button type='submit' className="btn">Yes</button>
                                
                                </div>
                            </div>
                        </dialog>*/}
                    </div> 
                    


                    

                </form>
                
            </div>
        </div>
    );
};

export default AddCar;