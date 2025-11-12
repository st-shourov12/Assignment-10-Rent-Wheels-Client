import React from 'react';
import useCars from '../UseHook/UseCars';

const Searchbar = () => {

    const [search, setSearch] = useState('');

    const {cars} = useCars()
    
    const [searchedCar, setSearchedCar] = useState([]);
    useEffect(()=>{
        
        
        const timer = setTimeout(() => {
        const lowerCaseApp = search.trim().toLowerCase();
        const searchApp = cars.filter(car=>car.carName.toLowerCase().includes(lowerCaseApp));

        lowerCaseApp ? setSearchedCar(searchApp) : setSearchedCar(CAR);
        
        setLoad(false);
        }, 200); 

        return () => clearTimeout(timer);
    }, [search, apps]);
    return (
        <div>
            <label className='input'>
                    <input value={search} onChange={e => {setSearch(e.target.value) }} type="search" name=""  placeholder='Search App' />
            </label>
            
        </div>
    );
};

export default Searchbar;