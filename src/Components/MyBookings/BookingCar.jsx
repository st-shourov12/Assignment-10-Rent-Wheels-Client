import React, { use } from 'react';

const BookingCar = ({myCarPromise}) => {

    const myCars = use(myCarPromise);
    console.log(myCars);
    return (
        <div>
            
        </div>
    );
};

export default BookingCar;