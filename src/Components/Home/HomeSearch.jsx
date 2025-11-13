import React, { useEffect, useState } from 'react';
import useCars from '../UseHook/UseCars';

import Car from '../Car/Car';
import Spinner2 from '../Spinner/Spinner2';

const HomeSearch = () => {
    const {cars} = useCars();


    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);
    const [searchedCar, setSearchedCar] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        
        if (value.trim().length === 0) {
        setSearchedCar([]);
        setLoad(false);
        return;
        }

        setLoad(true);
    };

    
    
    useEffect(()=>{
       
        if (search.trim().length === 0) return;

        const timer = setTimeout(() => {
            const lowerCaseCar = search.trim().toLowerCase();
            const filteredCars = cars.filter((car) =>
                car.carName.toLowerCase().includes(lowerCaseCar)
            );

            setSearchedCar(filteredCars);
            setLoad(false);
        
        }, 100); 

        return () => clearTimeout(timer);
    }, [search,cars]);


    // useEffect(() => {
    //     setSearchedCar(cars);
    // }, [cars]);



    return (
        <div>
            <div className={`flex flex-col gap-2 md:gap-5 items-center justify-center py-5 my-5 ${searchedCar.length === 0 && 'my-10 lg:my-20' }`}>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] text-center">
            
                    <span className="text-[#DC2626]">Search Your </span>Favourite car
                </h2>


                <label className='input w-8/10 sm:w-1/2 '>
                        <input value={search} onChange={handleSearch} type="search"  placeholder='Search Car' />
                </label>

                {searchedCar.length === 0 ? 
                    <div className='text-gray-700 text-center px-3 lg:font-semibold font-medium'>
                        <p>Book your dream car in just a few clicks with our simple and user-friendly process.</p>
                    </div>
                    :
                
                    <h3 className="text-2xl font-bold">Cars Found (<span className="text-[#DC2626]">{searchedCar.length}</span>)</h3>
                }
            </div>

                {
                load ? <Spinner2 /> :


                
                    <div>
                        {
                    
                            searchedCar.length === 0 ? 
                            <></>                  :
                            <div className={`grid md:grid-cols-2 xl:grid-cols-3 ${searchedCar.length === 1 && 'md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'} ${searchedCar.length === 2 && 'md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'} ${searchedCar.length === 3 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'} ${searchedCar.length === 4 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${searchedCar.length == 6 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'} ${searchedCar.length === 5 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${searchedCar.length > 6 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} gap-10 px-2 pb-10`}>
                                {
                                    searchedCar.map(car =>(
                                        <Car key={car._id} car={car}></Car>
                                    ))
                                }

                                
                            </div>
                        }

                        
                    </div>

                    

                
            }
                
            
        </div>
    );
};

export default HomeSearch;