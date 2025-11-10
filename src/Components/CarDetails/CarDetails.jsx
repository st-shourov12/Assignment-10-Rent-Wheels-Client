import React from 'react';
import { useParams } from 'react-router';
import useCars from '../UseHook/UseCars';
import { toast } from 'react-toastify';


const CarDetails = () => {

    const { id }= useParams();
    const {cars ,setCars, changes} = useCars() ;
    const filterCar = cars.find(car => (car._id) === (id))
    
    const handleUpdate = (_id) =>{


        
        // if (filterCar?.availability === "Booked") {
        //     return toast.error('Sorry! Already Booked')
        // }


        fetch(`http://localhost:4000/cars/${_id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    availability: 'Booked'
                })
        })
        .then(res=> res.json())
        .then(data=>{
                const updatedCars = cars.map(car => car._id === id ?
                    { ...car, availability: 'Booked' } 
                    : car
                );
                setCars(updatedCars);
                changes();
                toast.success(`You have booked Car ${data}`);
            
            })
    }

   

    return (
    <div className="lg:max-w-[80%] mx-auto p-6 sm:p-10">
        <div className="bg-white flex flex-col lg:flex-row justify-between gap-5 rounded-lg p-6">
            <figure className="relative lg:w-1/2">
                <img
                src={filterCar?.imageUrl}
                alt={filterCar?.carName}
                className="rounded-xl w-full sm:h-[450px] mx-auto" />
                <span className={`px-3 py-2 absolute top-2 right-2 text-white ${filterCar?.availability === "Booked" ? 'bg-red-600' : 'bg-green-600'} rounded-xl`}>{filterCar?.availability}</span>
            </figure>
            <div className="flex flex-col justify-between lg:w-1/2">
                {/* <div className="flex flex-col justify-between"> */}
                    <h1 className="text-3xl font-bold mb-2">
                        {filterCar?.carName}
                    </h1>
                    
                    
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {filterCar?.category}
                        </span>
                        
                    </div>

                    <p className="text-gray-600 mb-6">
                        {filterCar?.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                            <p className="text-gray-500">Price per day</p>
                            <p className="text-2xl font-bold text-green-600">
                                ${filterCar?.rentPrice}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-500">Location</p>
                            <p className="font-semibold">{filterCar?.location}</p>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="flex flex-col justify-between"> */}
                    <div className="mt-6 border-t pt-4">
                        <p className="text-gray-500">Provider</p>
                        <p className="font-semibold">{filterCar?.providerName}</p>
                        <p className="text-gray-600">{filterCar?.providerEmail}</p>
                    </div>

                    <button  onClick={()=>handleUpdate(filterCar?._id)} className={`mt-6 w-full text-white py-3 rounded-lg ${filterCar?.availability === "Booked" ? 'bg-red-600' :'bg-blue-600 hover:bg-blue-700'} `}>
                        Book Now
                    </button>
                {/* </div> */}
                
                {/* disabled= {filterCar?.availability === "Booked"} */}
                
            </div>
            
            
        </div>
    </div>
);
};

export default CarDetails;