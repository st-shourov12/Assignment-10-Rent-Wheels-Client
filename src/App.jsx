
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from '../src/Components/Footer/Footer'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>


      <ToastContainer position={'top-center'}></ToastContainer>
    </>
  )
}

export default App
