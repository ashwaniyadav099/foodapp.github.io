import React, { useState } from 'react'
import { TbToolsKitchen2 } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import {  useDispatch, useSelector } from 'react-redux';
import { Card } from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom"
import { GrSubtract, GrAdd } from "react-icons/gr";
const Navbar = () => {
        const navigate = useNavigate();
    const dispatch = useDispatch();
        const [midelopen,setmodelopen]=useState(false)
        const menulist = useSelector((state) => { 
            return  state.crudop
        })
        function ccna(){
            if(window.location.href === 'http://localhost:3000/menu'){
                setmodelopen(true)
            }
        }
    return (
      <>
            <div className=' bg-[#3F51B5] block py-[10px]' >
                <div className="container mx-auto flex justify-between items-center ">
                <Link to='/home'>
                   <div className="logo flex gap-[5px] items-center	">
                  <span className='icon'>{<TbToolsKitchen2 className='text-white  text-[22px]	'/> }</span>
                  <span className='font-sans text-[22px]	antialiased font-semibold text-white	tracking-wide	'>Food's Restaunrant</span>
                        </div>
                        </Link>
              <div className="cart-icon relative " onClick={() => { ccna()}}>
                  <span><HiShoppingCart className='text-[22px] text-white' /></span>
                  {menulist.cart ? <span className='absolute w-[20px] text-[12px] top-[-60%] right-[-60%] flex
                 justify-center items-center text-white h-[20px] bg-[gray] rounded-full'>{menulist.cart}</span> : ""}
              </div> 
          </div>
            </div>
            { midelopen ? <div className='model bg-[#00000085] w-[100vw] h-[100vh] fixed flex items-center justify-center top-0 right-0'>
               <Card
                className="max-w-sm w-5/6"
               
                >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                   Order Summery 
                    </p>
                    </h5>
                    <div className="product-list">
                        <ul>
                            {
                                menulist.products.map((elem) => {
                                  if(elem.quanity){
                                    return <li className='flex justify-between'>
                                        
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        <p>  {elem.title}: </p>
                                        </p>
                                         <p className="font-normal text-gray-700 dark:text-gray-400">
                                           <p> {elem.quanity} </p>
                                        </p>
                                        <div className='flex gap-2'>
                                                    <button className='bg-[#3F51B5] px-[10px] py-[4px] ' onClick={()=>{
                                                        dispatch({
                                                            type: "ADD",
                                                            payload:elem.id
                                                            })
                                                    }}                                                      >
                                                    <GrAdd className='text-white	' color='#fff'/>
                                                    </button>
                                            <button className='bg-[gray] px-[10px] py-[4px] ' onClick={() => {
                                                console.log()
                                                          dispatch({
                                                            type: "SUB",
                                                            payload:elem.id
                                                            })
                                                    }}              >
                                                        <GrSubtract/>
                                                    </button>
                                                
                                                </div>
                                      </li>
                                    }
                                })
                            }
                           
                        </ul>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <p>Total (INR) : {menulist.total} </p>
                     </p>
                    
                    <div>
                    <div className="flex justify-end gap-1">
                            <button className='bg-[#3F51B5] tracking-wide text-[11px] p-2 rounded  text-white' onClick={() => {
                              navigate("/cart")  
                        }}>
                           SAVE AND CHECKOUT
                        </button>
                        <button className='bg-[#FFF] tracking-wide text-[11px] p-2 rounded' onClick={()=>{setmodelopen(false)}}>
                         CANCEL
                            </button>
                      </div>
                    </div>
                </Card>
            </div>
            :""}
            </>
  )
}

export default Navbar