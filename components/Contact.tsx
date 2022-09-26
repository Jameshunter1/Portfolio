import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from "react-hook-form"
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}


type Props = {}

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:james.hunter0423@gmail.com?subject=${formData.subject}& body=Hi, my name is ${formData.name}.${formData.message}(${formData.email})`
  }
  return (
      <div className='h-screen flex relative flex-col text-center md:text-left md:flex-flow max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

          <div className='flex flex-col space-y-12'>
              <h4 className='text-4xl font-semibold text-center'>
                  I have got just what you need. {""}
                  <span className=' decoration-[#f7ab0a]/50 underline'>Lets Talk</span>
              </h4>

              <div className='space-y-10'>
                  <div className='flex items-center space-x-5 justify-center'>
                      <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p>(905) 328-2058</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p>James.hunter0423@gmail.com</p>
                  </div>
                  <div className='flex items-center space-x-5 justify-center'>
                      <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p>Welland, ON</p>
                  </div>
                 
              </div>
              <form className='flex flex-col space-y-2 w-fit mx-auto'>
                  <div className='flex space-x-2'>
                      <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                      <input  {...register('email')} placeholder="Email" className='contactInput' type="text" />
                  </div>
                     <input {...register('email')} placeholder="Subject"className='contactInput' type="text"/>
                      <textarea {...register('email')} placeholder="Message"className='contactInput' />
                      <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button> 
              </form>
          </div>
              
          </div>
    
  )
}