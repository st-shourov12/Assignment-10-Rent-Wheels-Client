import axios from "axios";
import { useEffect, useState } from "react";

import React from 'react';

const useCars = () => {
    const [cars ,setCars] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    const [reload, setReload] = useState(false);

    useEffect(()=>{
        axios('http://localhost:4000/cars')
        .then(r => setCars(r.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))

    }, [reload]);

    const changes = () => setReload(!reload)


    return (
        {cars ,setCars, error ,loading, changes}
    );
};

export default useCars;