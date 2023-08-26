import React, { useState } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import {useNavigate} from "react-router-dom"
import Navbar from '../components/Navbar';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const Loginpage = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('')
    const [pass,setpass]=useState('')
    const [showalert, setshowalert] = useState(false)
    
    function handleSubmit(event) {
        event.preventDefault()
        if (email === 'yadavashwani@gmail.com' && pass === "Ashwani@6") {
            navigate("/home")
        } else {
            setshowalert(true)
            const timer = setTimeout(() => {
                setshowalert(false)
              }, 5000);
       }
      
        
    }
  return (
      <>
        
        <Navbar/>
          <div className="form-page">
              <div className="container mx-auto ">
                  <Card className='w-1/2 mx-auto mt-[40px] p-3'>   
                      <h2 className=' text-[25px] subpixel-antialiased	font-extrabold'>User Login </h2>
                  <form className="flex max-w-md flex-col  gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
                                  type="email"
                                  value={email}
                                  onChange={(e) => {
                                    setemail(e.target.value)
                                  }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
                                  type="password"
                                  value={pass}
                                  onChange={(e)=>{setpass(e.target.value)}}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit" >
        Submit
      </Button>
                  </form>
                  </Card> 
              </div>
          </div>
 {showalert ?
          <Alert
      color="failure"
              icon={HiInformationCircle}
                  className='fixed top-0 w-[100%] left-0'
                  onDismiss={()=> setshowalert(false)}
    >
      <span>
        <p>
          <span className="font-medium">
            Info alert!
          </span>
          Please Enter Your email and password correctly.
        </p>
      </span>
         </Alert>
         :""}




   </>
  )
}

export default Loginpage