import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
// import { useRef } from 'react';

const AddCar = () => {

    const {user} = use(AuthContext);
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

        fetch(`http://localhost:4000/cars`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ newCar})
        })
        .then(res=> {res.json()})
        .then(data =>{
            console.log(data);
        });
  
        
    e.target.reset()
    }
    return (
        <div className='max-w-[60%] bg-[#16213E] text-white mx-auto p-10 border border-gray-600 mt-10 rounded-2xl'>
            <h2 className='text-center text-4xl'>Add a Car</h2>

            <form onSubmit={handleAddCar} className='p-5 flex flex-col gap-2'>

                <div className='flex flex-col sm:flex-row gap-1'>
                    <fieldset className='sm:w-1/2'>

                        <label className="label text-white">Car Name</label>
                        <input name='carName' required type="text" className="input text-black w-full" placeholder="Car" />
                    </fieldset>
                    <fieldset className='sm:w-1/2'>

                        <label className="label text-white">Category</label>
                        <select name='category' defaultValue="Electric" className="select text-black w-full">
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
                        <label className="label w-full text-white">Rent Price</label>
                        <input required name='rentPrice' type="number" className="input text-black w-full" placeholder="Rent Price(Per day)" />
                    </fieldset>
                    <fieldset className='sm:w-1/2'>
                        <label className="label text-white">Location</label>
                        <input required name='location' type="text" className="input text-black w-full" placeholder="Location" />

                    </fieldset>
                </div>
                
                
                <label className="label text-white">Image URL</label>
                <input required name='img' type="text" className="input text-black w-full" placeholder="imgURL" />

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
                    <button className='px-5 bg-green-600 text-white py-3 rounded-xl shadow-0'>Add Car</button>
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
    );
};

export default AddCar;