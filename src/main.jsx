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
import BrowseCar from './Components/BrowseCar/BrowseCar.jsx';
import MyListing from './Components/MyListing/MyListing.jsx';
import MyBookings from './Components/MyBookings/MyBookings.jsx';
import AddCar from './Components/AddCar/AddCar.jsx';
// import Error from './Error/Error.jsx';

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
        path: 'browseCar',
        Component : BrowseCar
      },
      {
        path: 'addCar',
        element : <AddCar />
      },
      {
        path: 'myList',
        element : <MyListing />
      },
      {
        path: 'bookings',
        element: <MyBookings />
      },
    ]
  },
  // {
  //   path: '*',
  //   element: <Error />
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>     
      </RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
