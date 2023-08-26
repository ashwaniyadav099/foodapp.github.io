import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'flowbite-react';
import { GrSubtract , GrAdd } from "react-icons/gr";
import Navbar from '../components/Navbar';
const Menu = () => {
    const dispatch = useDispatch()
    const menulist = useSelector((state) => {
     
   return  state.crudop
  })
  return (
      <>
          <Navbar cart={ menulist.Card} />
          <div className="manu">
              <div className="container mx-auto w-4/6">
                  <div className="flex flex-wrap justify-between gap-[25px] py-[30px]">
                      {
                          menulist.products.map((element, index) => {
                            return       <div className='w-[31%]' key={index}><Card
                                            imgAlt="product image"
                                            imgSrc={element.img}
                                            >
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                <p>
                                               {element.title}
                                                </p>
                                            </h5>
                                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                                 <p>  Price : {element.price}  </p>
                                                </p>
                                              
                                                {  element.quanity ?<p className="font-normal text-gray-700 dark:text-gray-400">
                                                 <p>  Total  : {element.quanity}  </p>
                                            </p> : ''}
                                            {  element.total ? <p className="font-normal text-gray-700 dark:text-gray-400">
                                                 <p>  Cost (INR) : {element.total}  </p>
                                                </p> :''}
                                                <div className='flex gap-2'>
                                                    <button className='bg-[#3F51B5] px-[10px] py-[4px] ' onClick={()=>{
                                                        dispatch({
                                                            type: "ADD",
                                                            payload:element.id
                                                            })
                                                    }}                                                      >
                                                    <GrAdd className='text-white	' color='#fff'/>
                                                    </button>
                                    <button className='bg-[gray] px-[10px] py-[4px] '    onClick={()=>{
                                                        dispatch({
                                                            type: "SUB",
                                                            payload:element.id
                                                            })
                                                    }}              >
                                                        <GrSubtract/>
                                                    </button>
                                                
                                                </div>
                                         </Card></div>
                        })

                      }
                  </div>
              </div>
          </div>
          
    </>
  )
}

export default Menu