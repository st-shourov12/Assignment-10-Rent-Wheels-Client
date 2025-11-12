import React, { use, useRef } from 'react';
import { Link, useParams } from 'react-router';
import useCars from '../UseHook/UseCars';
import { toast } from 'react-toastify';
import Error2 from '../../Error/Error2';
import { AuthContext } from '../../Context/AuthContext';
import Spinner from '../Spinner/Spinner';


const CarDetails = () => {

    const { id }= useParams();
    const {cars,loading ,setCars, changes} = useCars() ;
    const filterCar = cars.find(car => (car._id) === (id));
    const {user} = use(AuthContext);

    const confirmModalRef = useRef();




    const handleModal = ()=> {

        if (filterCar?.availability === "Booked") {
            return toast.error('Sorry! Already Booked')
        } else{
        confirmModalRef.current.showModal()
        }
    };

    const handleCancelBook = () => {
        confirmModalRef.current.close()
    };

    

        

    
    const handleUpdate = (e, _id) =>{
        e.preventDefault();

        

        const bookedCar = cars.filter(car => car._id === id );
        const bookedInfo = bookedCar.find(item=> item?.availability);


        
        const totalDays = e.target.totalDays.value;
        const totalPrice = Number(bookedInfo?.rentPrice) * Number(totalDays) ; 

        const today = new Date().toISOString().split('T')[0];
    
        const date = new Date(today);

        const nextDateObj = new Date(date);
        nextDateObj.setDate(date.getDate() + Number(totalDays));
        const nextDate = nextDateObj.toISOString().split("T")[0];
        




        
        


        fetch(`https://rent-wheels-server-sigma.vercel.app/cars/${_id}`,{
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
                data;
                setCars(updatedCars);
                changes();
                toast.success(`You have booked Car for ${totalDays} days`);
            
            })

        

        const myCarBook = {
                carId : bookedInfo?._id ,
                name: user?.displayName,
                providerEmail: bookedInfo?.providerEmail,
                carName : bookedInfo?.carName,
                email: user?.email,
                image : bookedInfo?.imageUrl,
                carStatus : bookedInfo?.availability,
                category : bookedInfo?.category,
                rentPrice : bookedInfo?.rentPrice,
                location : bookedInfo?.location,
                totalDays : totalDays ,
                totalPrice : totalPrice ,
                today : today ,
                arriveDate : nextDate ,
            }

            

            fetch(`https://rent-wheels-server-sigma.vercel.app/myCars`,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(myCarBook)
            })
            .then(res=> res.json())
            .then(data=>(data));

            confirmModalRef.current.close();
        
    }
  

   
   if (loading) {
     return <Spinner />
    }
    if(!filterCar){
        return <Error2></Error2>
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
                    <div>
                        <button type='button' onClick={()=>{handleModal()} }  className={`mt-6 w-full text-white py-3 rounded-lg ${filterCar?.availability === "Booked" ? 'bg-red-600' :'bg-blue-600 hover:bg-blue-700'} `}>
                            Book Now
                        </button>


                        <dialog ref={confirmModalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-xl text-center text-black">Book Now ?</h3>
                                
                                {/* <div className="modal-action">  */}
                                    <form onSubmit={(e)=>handleUpdate(e, filterCar?._id)}  className='p-5 flex flex-col gap-4'>

                                        <h3 className="text-xl">{filterCar?.carName}</h3>


                                        
                                            <fieldset className=''>
                                                <label className="label w-full text-black my-3">Total Days</label>
                                                <input defaultValue={1} name='totalDays' type="number" className="input text-black w-full" placeholder="Total Days" />
                                            </fieldset>
                                            {/* <fieldset className='sm:w-1/2'>
                                                <label className="label text-black">Location</label>
                                                <input required name='location' type="text" className="input text-black w-full" placeholder="Location" />

                                            </fieldset> */}
                                        
                                        <div className="flex justify-between gap-3">
                                            <button type='submit' className="w-full py-3 text-white rounded-lg px-4 bg-blue-600 hover:bg-blue-700">Book</button>
                                            <button type='button' onClick={()=>handleCancelBook()} className="bg-[#DC2626] hover:bg-red-800 rounded-lg text-white py-3 w-full">Cancel</button>

                                        </div>



                                    </form>
                                
                                    
                                
                                {/* </div> */}
                            </div>
                        </dialog>

                        

                    </div>
                {/* </div> */}
                
                {/* disabled= {filterCar?.availability === "Booked"} */}
                
            </div>
            
            
        </div>
        <div className='flex justify-center items-center'>

            <Link className=' px-3 py-2 bg-[#DC2626] text-white rounded-lg' to={-1}>Go Back</Link>
        </div>
    </div>
);
};

export default CarDetails;