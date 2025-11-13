import React, {  useEffect, useState } from 'react';
import Car from '../Car/Car';
import useCars from '../UseHook/UseCars';
import Spinner from '../Spinner/Spinner';
import Notf from './Notf';
import { Link } from 'react-router';


const BrowseCars = () => {

    const {cars, loading} = useCars();


    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);

    
    const [searchedCar, setSearchedCar] = useState([]);
    useEffect(()=>{
       
        setLoad(true);
        const timer = setTimeout(() => {
        const lowerCaseCar = search.trim().toLowerCase();
        const searchCars = cars.filter(car=>car.carName.toLowerCase().includes(lowerCaseCar));

        lowerCaseCar ? setSearchedCar(searchCars) : setSearchedCar(cars);

        setLoad(false);
        
        }, 0); 

        return () => clearTimeout(timer);
    }, [search,cars]);


    useEffect(() => {
        setSearchedCar(cars);
    }, [cars]);


    if (loading) {
        return <Spinner />
    }

    console.log(cars);
    return (
        <div className='bg-[#F5F7FA]'>
            <h2 className="text-4xl text-center font-bold py-10">All <span className="text-[#6C63FF]">Cars</span> ({searchedCar.length})</h2>

            <div className='flex justify-center my-5'>
                <label className='input '>
                        <input value={search} onChange={e => {setSearch(e.target.value) }} type="search"  placeholder='Search cars by name' />
                </label>
                
            </div>

            {
                load ? <Spinner /> :


                
                    <div>
                        {
                    
                            searchedCar.length === 0 ? 
                            <Notf />                    :
                            <div className={`grid md:grid-cols-2 xl:grid-cols-3 ${searchedCar.length === 1 && 'md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'} ${searchedCar.length === 2 && 'md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'} ${searchedCar.length === 3 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'} ${searchedCar.length === 4 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${searchedCar.length == 6 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'} ${searchedCar.length === 5 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${searchedCar.length > 6 && 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} gap-10 px-2 pb-10`}>
                                {
                                    searchedCar.map(car =>(
                                        <Car key={car._id} car={car}></Car>
                                    ))
                                }

                                
                            </div>
                        }

                        <div className='flex justify-center items-center py-5 sm:py-10'>
                                    <Link className='sm:px-5 sm:py-4 px-3 py-2 bg-[#DC2626] text-white rounded-lg' to={'/'}>Go Home</Link>
                        </div>
                    </div>

                    

                
            }

        </div>
    );
};

export default BrowseCars;