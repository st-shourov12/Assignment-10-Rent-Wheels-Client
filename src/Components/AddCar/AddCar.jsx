import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const AddCar = () => {

    const {user} = use(AuthContext);

    const {displayName} = user

    const handleAddCar = (e)=>{
        e.preventDefault();
        
    
    const carName = e.target.carName.value;
    const category = e.target.category.value;
    const rentPrice = e.target.rentPrice.value;
    const location = e.target.location.value;
    const img = e.target.img.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const describe = e.target.describe.value;

     console.log({
      carName,
      category,
      rentPrice,
      location,
      img,
      name,
      email,
      describe,
      displayName
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
                        <input name='carName' type="text" className="input text-black w-full" placeholder="Car" />
                    </fieldset>
                    <fieldset className='sm:w-1/2'>

                        <label className="label text-white">Category</label>
                        <select name='category' defaultValue="Select a Category" className="select text-black w-full">
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
                        <input name='rentPrice' type="number" className="input text-black w-full" placeholder="Rent Price(Per day)" />
                    </fieldset>
                    <fieldset className='sm:w-1/2'>
                        <label className="label text-white">Location</label>
                        <input name='location' type="text" className="input text-black w-full" placeholder="Location" />

                    </fieldset>
                </div>
                
                
                <label className="label text-white">Image URL</label>
                <input name='img' type="text" className="input text-black w-full" placeholder="imgURL" />

                <div className="flex flex-col sm:flex-row gap-1">
                    <fieldset className='sm:w-1/2'>
                        <label className="label text-white">Provider Name</label>
                        <input name='name' type="text" className="input text-black w-full" placeholder="" />

                    </fieldset>
                    <fieldset className='sm:w-1/2'>
                        <label className="label text-white">Provider Email</label>
                        <input name='email' type="email" className="input text-black w-full" placeholder="" />
                    </fieldset>
                </div>
                
                <legend className="fieldset-legend text-white">Description</legend>
                <textarea name='describe' className="textarea text-black w-full h-20" placeholder="Describe your car"></textarea>

                <div className="flex justify-center">
                    <button className='btn'>Add Car</button>
                </div>
                


                

            </form>
            
        </div>
    );
};

export default AddCar;