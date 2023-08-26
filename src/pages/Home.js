import React from 'react'
import { Button } from 'flowbite-react';
import {useNavigate} from "react-router-dom"
import Navbar from '../components/Navbar';
const Home = () => {
    const navigate = useNavigate();
    return (
        <>  <Navbar />
            <div className='home'>
                <div className="container mx-auto">
                    <h2 className='font-family text-[42px] text-center p-[100px] pb-[20px]'>Welcome to Food's <br></br> Kitchen</h2>
                    <Button className=' bg-[#3F51B5] mx-auto p-[00px]' onClick={()=>navigate("/menu")}> 
                        GO TO MENU
                    </Button>
                </div>
            </div>
        </>
  )
}

export default Home