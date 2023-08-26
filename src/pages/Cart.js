import React from 'react'
import { Card } from 'flowbite-react';
import Navbar from '../components/Navbar';

function Cart() {
    return (
        <>
            <Navbar/>
      <div>
          <div className="container mx-auto h-100 flex justify-center items-center">
          <Card
      className="max-w-sm mt-[50px]"
      href="#"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
            Checkout
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>Thank you for your order.  </p>
      </p>
          </Card>
           </div>
            </div>
            </>
  )
}

export default Cart