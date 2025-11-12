import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Register/Login.jsx';

import MyListing from './Components/MyListing/MyListing.jsx';
import MyBookings from './Components/MyBookings/MyBookings.jsx';
import AddCar from './Components/AddCar/AddCar.jsx';
import CarDetails from './Components/CarDetails/CarDetails.jsx';
import PrivateRoutes from './Components/Route/PrivateRoute.jsx';
import Error from './Error/Error.jsx';
import Browse from './Components/BrowseCar/Browse.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true , 
        Component : Home,
      },
      {
        path: 'register',
        Component : Register
      },
    
      {
        path: 'login',
        Component : Login
      },
      {
        path: 'cars',
        Component : Browse
      },
      {
        path: 'cars/:id',
        element : <PrivateRoutes><CarDetails /></PrivateRoutes> 
      },
      {
        path: 'addCar',
        element : <PrivateRoutes><AddCar /></PrivateRoutes> 
      },
      {
        path: 'myList',
        element : <PrivateRoutes><MyListing /></PrivateRoutes> 
      },
      {
        path: 'bookings',
        element: <PrivateRoutes> <MyBookings /></PrivateRoutes>
      },
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>     
      </RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
