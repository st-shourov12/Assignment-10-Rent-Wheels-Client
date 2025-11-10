import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useCars from '../UseHook/UseCars';

import { toast } from 'react-toastify';

const ListingCar = ({car,cars, setCars, }) => {

    const confirmModalRef = useRef();
    const deleteModal = useRef();

    const {user} = use(AuthContext);
    const { changes} = useCars() ;
    const [myCar, setMyCar] = useState(car);

    const [deleted, setDeleted] = useState(false);


    
    // setCars({...cars, car})

    const handleModalUpdate = ()=> {
        confirmModalRef.current.showModal()
    } ;

    const handleModalDelete = () =>{
        deleteModal.current.showModal()
    };

    const handleUpdateCar = (e , _id) =>{
        e.preventDefault();

        const car_name = e.target.carName.value;
        const categorys = e.target.category.value;
        const rent_Price = e.target.rentPrice.value;
        const locations = e.target.location.value;
        const img = e.target.img.value;
        const name = user?.displayName;
        const email = user?.email;
        const describe = e.target.describe.value;

        const updatedData = {
            carName: car_name,
            category: categorys,
            rentPrice: rent_Price,
            location: locations,
            imageUrl: img,
            description: describe,
            providerName: name,
            providerEmail: email,
            availability: car?.availability
    };


        setMyCar(updatedData);

        const updatedCars = cars.map(car => car._id === _id ?
            { ...car, ...updatedData } 
            : car
        );
        setCars(updatedCars);
        changes();
        toast.success(`You have Modified ${car_name}`);
        confirmModalRef.current.close();
        
    fetch(`http://localhost:4000/cars/${_id}`,{
                        method: 'PATCH',
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(updatedData)
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                })




        
    };

    const handleDeleteCar = (id) => {

        const updatedCars = cars.filter(car => car._id !== id);
        setCars(updatedCars);
        setDeleted(true);

        
        deleteModal.current.close();
        toast.success('Car deleted successfully!');

        // fetch(`http://localhost:4000/cars/${id}`, {
        //     method: 'DELETE'
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log('Delete confirmed:', data);
        // })
    }

    const handleCancelDelete = () =>{
        deleteModal.current.close();
    }

    const handleCancelUpdate = () =>{
        confirmModalRef.current.close();
    }

    
    if (deleted) {return null};

    return (
        <div className='p-5 flex flex-col gap-3 justify-between border bg-[#ffffff] border-gray-400 rounded-xl'>
            <figure>
                <img src={myCar?.imageUrl} alt={myCar?.carName}  className='w-full mx-auto rounded h-[400px]'/>
            </figure>
            <div className="grid gap-4 grid-cols-2 justify-between items-center">
                <h2 className="text-2xl font-bold col-span-2 md:col-span-1">
                    {myCar?.carName}
                </h2>
                <div className=' md:justify-self-end'>

                    <span className={`px-3 py-2 font-bold top-2 right-2 ${myCar?.availability === "Booked" ? 'bg-red-400 text-red-800' : 'bg-green-400 text-green-800'} rounded-xl`}>{myCar?.availability}</span>
                </div>
                <div className='justify-self-end md:justify-self-start'>

                    <span className='font-semibold px-3 py-2 rounded-lg text-[#1E293B] bg-[#06B6D4]'>
                        {
                            myCar?.category
                        }
                    </span>
                </div>
            </div>
            
            <div className='font-semibold '>
               $ {
                    myCar?.rentPrice
                }
                <span className='font-normal'>/ Day</span>
            </div>
            <div className="btn-grp flex gap-3">
                <div className='w-1/2'>
                    <button type='button' onClick={()=>{handleModalUpdate()}} className="py-3 bg-[#16A34A] rounded-lg text-white btn w-full">Update</button> 
                
                    <dialog ref={confirmModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-xl text-center text-green-600">Update Your Car</h3>
                            
                            <div className="modal-action"> 

                                <form onSubmit={(e)=> {handleUpdateCar(e , myCar?._id)}}>

                                    <div className='flex flex-col sm:flex-row gap-1'>
                                        <fieldset className='sm:w-1/2'>

                                            <label className="label text-gray-800">Car Name</label>
                                            <input name='carName' defaultValue={myCar?.carName} type="text" className="input text-gray-800 w-full" placeholder="Car" />
                                        </fieldset>
                                        <fieldset className='sm:w-1/2'>

                                            <label className="label text-gray-800">Category</label>
                                            <select name='category' defaultValue={myCar?.category} className="select text-gray-800 w-full">
                                                <option disabled={true}>Select a Category</option>
                                                <option>Sedan</option>
                                                <option>SUV</option>
                                                <option>Luxury</option>
                                                <option>Electric</option>
                                                <option>Hatchback</option>
                                            </select>
                                        </fieldset>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-1">
                                        <fieldset className='sm:w-1/2'>
                                            <label className="label w-full text-gray-800">Rent Price</label>
                                            <input defaultValue={myCar?.rentPrice} name='rentPrice' type="number" className="input text-gray-800 w-full" placeholder="Rent Price(Per day)" />
                                        </fieldset>
                                        <fieldset className='sm:w-1/2'>
                                            <label className="label text-gray-800">Location</label>
                                            <input defaultValue={myCar?.location} name='location' type="text" className="input text-gray-800 w-full" placeholder="Location" />

                                        </fieldset>
                                    </div>
                                    
                                    
                                    <label className="label text-gray-800">Image URL</label>
                                    <input defaultValue={myCar?.imageUrl} name='img' type="text" className="input text-gray-800 w-full" placeholder="imgURL" />
                                    
                                    <legend className="fieldset-legend text-gray-800">Description</legend>
                                    <textarea defaultValue={myCar?.description} name='describe' className="textarea text-gray-800 w-full h-20" placeholder="Describe your car"></textarea>


                                    <button type='submit' className="btn my-3 bg-green-600 text-white py-3 rounded-xl w-full">Update</button>
                                    <button type='button' onClick={()=>handleCancelUpdate()} className="btn bg-[#DC2626] text-white py-3 rounded-xl w-full">Cancel</button>
                                </form>
                            
                               
                                 
                            
                            </div>
                        </div>
                    </dialog>

                </div>
                <div className="w-1/2">
                    <button type='button' onClick={()=>{handleModalDelete()}} className="py-3 bg-[#DC2626] rounded-lg text-white btn w-full">Delete</button> 
                    <dialog ref={deleteModal} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center text-black">Are you sure to Delete this car</h3>
                            
                            <div className="modal-action flex justify-between"> 
                                
                                <button onClick={()=>handleDeleteCar(myCar?._id)} className="btn my-3 bg-[#dc2626] text-white py-4 rounded-xl w-1/2">Yes</button>
                                <button onClick={()=>handleCancelDelete()} className="btn my-3 bg-green-600 text-white py-4 rounded-xl w-1/2">No</button>
                            
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
            
            
        </div>
    );
};

export default ListingCar;