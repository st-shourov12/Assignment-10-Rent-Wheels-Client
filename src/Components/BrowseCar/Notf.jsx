import React from 'react';
import  notFound  from '../../assets/App-Error.png'

const Notf = () => {
    return (
        <div className='w-8/10 mb-5 mx-auto flex flex-col justify-center items-center'>
                    <img src={notFound} alt="Not Found" />
                
                    
        </div>
    );
};

export default Notf;