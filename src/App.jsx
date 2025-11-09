
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>


      <ToastContainer position={'top-center'}></ToastContainer>
    </>
  )
}

export default App
