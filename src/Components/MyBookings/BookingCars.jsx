import React, { use, useRef, useState } from 'react';
import { FaListAlt } from 'react-icons/fa';
import { FaCalendarDays, FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import useCars from '../UseHook/UseCars';
import NotBooking from './NotBooking';

const BookingCars = ({myCarPromise, user}) => {

    const bookedCars = use(myCarPromise) ;
    const [dbBookCars, setDbBookCars] = useState(bookedCars)

    const myBookedCars = bookedCars.filter(car=> car?.email === user?.email)
    const {cars , setCars, changes} = useCars();

    const [stateBookCar,  setStateBookCar] = useState(myBookedCars);

    const [selectedCar, setSelectedCar] = useState(null);

    //

    const confirmModalRef = useRef();
    const deleteModal = useRef();
    

    const handleModalUpdate = (car) => {
        setSelectedCar(car);
        confirmModalRef.current.showModal();
    };

    const handleModalDelete = (car) => {  
        setSelectedCar(car);
        deleteModal.current.showModal();
    };

    const handleCancelDelete = () => {
        deleteModal.current.close();
        setSelectedCar(null);
    };

    const handleCancelUpdate = () => {
        confirmModalRef.current.close();
        setSelectedCar(null);
    };

    const handleUpdateCar = (e ) =>{
        e.preventDefault();

        const totalDays = e.target.totalDays.value;
        const rentPrice = selectedCar?.rentPrice ;

        const totalPrice = Number(totalDays) * Number(rentPrice);
        const date = new Date(selectedCar?.today);

        const nextDateObj = new Date(date);
        nextDateObj.setDate(date.getDate() + Number(totalDays));
        const nextDate = nextDateObj.toISOString().split("T")[0];


        fetch(`http://localhost:4000/myCars/${selectedCar?._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    totalDays,
                    totalPrice,
                    arriveDate : nextDate
                    })
            }).then(res => res.json())
            .then(data => {
                console.log('Availability updated:', data);
                const updatedCars = dbBookCars.map(car => 
                    car._id === selectedCar?._id 
                        ? { ...car, 
                            totalDays : totalDays , 
                            totalPrice : totalPrice ,
                            arriveDate : nextDate

                        } 
                        : car
                );
                setDbBookCars(updatedCars);
                 setStateBookCar(updatedCars);
                // changes();
            })
            .catch(error => {
                toast.error('Update availability error:', error);
            });

        



        toast.success(`Updated booking for ${selectedCar?.carName}`);
        confirmModalRef.current.close();
        setSelectedCar(null);



        
    };

    const handleDeleteCar = () => {
        if (!selectedCar) return;

       
        const updateBookCar = stateBookCar.filter(car => car?._id !== selectedCar?._id);
        setStateBookCar(updateBookCar);
        
        deleteModal.current.close();
        toast.success('Booking cancelled successfully');
        
        


        fetch(`http://localhost:4000/myCars/${selectedCar?._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                ('Delete confirmed:', data);
            })
            .catch(error => {
                toast.error('Delete error:', error);
            });



        const carIdToUpdate = selectedCar?.carId || selectedCar?._id;
        
        if (carIdToUpdate) {
            fetch(`http://localhost:4000/cars/${carIdToUpdate}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    availability: 'Available'
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log('Availability updated:', data);
                const updatedCars = cars.map(car => 
                    car._id === carIdToUpdate 
                        ? { ...car, availability: 'Available' } 
                        : car
                );
                setCars(updatedCars);
                changes();
            })
            .catch(error => {
                toast.error('Update availability error:', error);
            });
        }

        setSelectedCar(null);
    }



    return (


        <div className='max-w-full  p-5 sm:p-10 flex flex-col justify-baseline gap-5 items-center mx-auto'>

            <h2 className="text-4xl flex gap-2 items-center">
                <FaListAlt className='text-blue-700' /> My Bookings
            </h2>
            <h3 className="text-xl flex gap-3">
                Total Cars: <span className="font-semibold text-blue-600">{stateBookCar.length}</span>
            </h3>

            {
                stateBookCar.length === 0 ?
                <NotBooking /> :
            

            // <div className={`grid ${stateBookCar.length === 1 && 'lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'} ${stateBookCar.length % 3 === 0 && 'lg:grid-cols-2 xl:grid-cols-3'} ${stateBookCar.length === 4 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' } ${stateBookCar.length === 5 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${stateBookCar.length > 6 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${stateBookCar.length % 2 === 0 && 'lg:grid-cols-2 xl:grid-cols-2'}  grid-cols-1 gap-5 my-5`}>

            <div className={`grid ${stateBookCar.length === 1 && 'lg:grid-cols-1 xl:grid-cols-1'} ${stateBookCar.length % 3 === 0 && 'lg:grid-cols-2 xl:grid-cols-3'} ${stateBookCar.length === 4 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' } ${stateBookCar.length === 5 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${stateBookCar.length > 6 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${stateBookCar.length % 2 === 0 && 'lg:grid-cols-2 xl:grid-cols-2'}  grid-cols-1 gap-5 my-5`}>
                {stateBookCar.map(car => (
                    // <div key={car?._id} className={`${stateBookCar.length === 1 && 'lg:w-[900px]'} rounded-xl p-5 flex flex-col justify-between gap-3 bg-white sm:w-[400px] md:w-[600px] lg:w-[400px]`}>
                    //     <figure className='w-full'>
                    //         <img src={car?.image} alt={car?.carName} className={ 'w-full h-[300px] sm:h-[400px] rounded-xl  object-cover'} />
                    //     </figure>

                    <div key={car?._id} className={`p-5 ${stateBookCar.length === 1 && 'lg:w-[900px]'} flex flex-col gap-3 justify-between border bg-[#ffffff] border-gray-400 rounded-xl`}>
                        <figure>
                            <img src={car?.image} alt={car?.carName}  className={ 'w-full h-[300px] sm:h-[400px] rounded-xl  object-cover'}/>
                        </figure>
                        <h3 className='text-xl font-bold'>{car?.carName}</h3>

                        <div>
                            <span className='font-semibold px-3 py-2 rounded-lg text-[#1E293B] bg-[#06B6D4]'>
                                {car?.category}
                            </span>
                        </div>

                        <p className='flex gap-2 items-center'>
                            <FaLocationDot /> {car?.location}
                        </p>
                        <p className='flex gap-2 items-center'>
                            <FaCalendarDays /> {car?.today} to {car?.arriveDate}
                        </p>
                        <p className='flex gap-2 text-xl items-center text-green-700 font-semibold'>
                            <FaDollarSign /> {car?.totalPrice} <span className="font-normal text-sm text-gray-700">({car?.rentPrice})</span>
                        </p>

                        <div className="flex gap-3 justify-between">
                            <button type='button' onClick={() => handleModalUpdate(car)} className="py-3 bg-[#16A34A] rounded-lg text-white w-1/2">
                                Update
                            </button>
                            <button type='button' onClick={() => handleModalDelete(car)} className="py-3 bg-[#DC2626] rounded-lg text-white w-1/2">
                                Cancel Booking
                            </button>
                        </div>
                    </div>
                ))}
            </div>}

            <dialog ref={confirmModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center text-green-600">Update Your Booking</h3>
                    
                    <div className="modal-action">
                        <form onSubmit={(e) => handleUpdateCar(e, selectedCar)} className="w-full">
                            <h3 className="text-xl mb-3">{selectedCar?.carName}</h3>

                            <fieldset className='mb-3'>
                                <label className="block mb-2 text-black">Total Days</label>
                                <input key={selectedCar?._id} defaultValue={selectedCar?.totalDays} name='totalDays' type="number" className="input text-black w-full border" placeholder="Total Days" />
                            </fieldset>

                            <button type='submit' className="btn my-3 bg-green-600 text-white py-3 rounded-xl w-full">
                                Update
                            </button>
                            <button type='button' onClick={handleCancelUpdate} className="btn bg-[#DC2626] text-white py-3 rounded-xl w-full">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

            
            <dialog ref={deleteModal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-black">
                        Are you sure you want to cancel your booking?
                    </h3>
                    <h3 className="font-bold text-lg text-center text-blue-600 mt-2">
                        {selectedCar?.carName}
                    </h3>
                    
                    <div className="modal-action flex justify-between"> 
                                                
                        <button onClick={handleDeleteCar} className="btn my-3 bg-[#dc2626] text-white py-4 rounded-xl w-1/2">Yes , Cancel it</button>
                        <button onClick={()=>handleCancelDelete()} className="btn my-3 bg-green-600 text-white py-4 rounded-xl w-1/2">No , Keep it</button>
                                            
                    </div>
                </div>
            </dialog>
            
        </div>
    );
};

export default BookingCars;




// import React, { use, useRef, useState } from 'react';
// import { FaListAlt } from 'react-icons/fa';
// import { FaCalendarDays, FaDollarSign, FaLocationDot } from 'react-icons/fa6';
// import { toast } from 'react-toastify';
// import useCars from '../UseHook/UseCars';

// const BookingCars = ({myCarPromise, user}) => {

//     const bookedCars = use(myCarPromise);
//     const myBookedCars = bookedCars.filter(car => car?.email === user?.email);
//     const {cars, setCars, changes} = useCars();

//     const [stateBookCar, setStateBookCar] = useState(myBookedCars);
//     const [selectedCar, setSelectedCar] = useState(null);

//     const confirmModalRef = useRef();
//     const deleteModal = useRef();
    
    // const handleModalUpdate = (car) => {
    //     setSelectedCar(car);
    //     confirmModalRef.current.showModal();
    // };

    // const handleModalDelete = (car) => {  
    //     setSelectedCar(car);
    //     deleteModal.current.showModal();
    // };

    // const handleCancelDelete = () => {
    //     deleteModal.current.close();
    //     setSelectedCar(null);
    // };

    // const handleCancelUpdate = () => {
    //     confirmModalRef.current.close();
    //     setSelectedCar(null);
    // };

//     const handleUpdateCar = (e) => {
//         e.preventDefault();
        
        // const totalDays = e.target.totalDays.value;

        // fetch(`http://localhost:4000/myCars/${selectedCar?._id}`, {
        //         method: 'PATCH',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             totalDays : totalDays
        //         })
        //     }).then(res => res.json())
            // .then(data => {
            //     // console.log('Availability updated:', data);
            //     const updatedCars = cars.map(car => 
            //         car._id === carIdToUpdate 
            //             ? { ...car, totalDays : totalDays } 
            //             : car
            //     );
            //     // setCars(updatedCars);
            //     // changes();
            // })
            // .catch(error => {
            //     toast.error('Update availability error:', error);
            // });
//         }

        
        
//         // Add your update logic here
        // toast.success(`Updated booking for ${selectedCar?.carName}`);
        // confirmModalRef.current.close();
        // setSelectedCar(null);
//     };


