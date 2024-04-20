import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'

const Signup = () => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='border  p-8 rounded-lg shadow-2xl shadow-green-400 grid gap-8'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        <img src={logo} />
                        <h2 className='font-extrabold'>Blog Flow</h2>
                    </div>
                    <h2 className='font-bold underline'>Signup</h2>
                </div>
                <div className='grid gap-4'>
                    <Input type="text" placeholder="Full name" className='bg-dark-4' />
                    <Input type="email" placeholder="Email" className='bg-dark-4' />
                    <Input type="password" placeholder="Password" className='bg-dark-4' />
                    <Input type="text" placeholder="Phone Number" className='bg-dark-4' />
                </div>
                <div className='text-center text-light-3'>
                    <h2>Already have an account</h2>
                    <Link to='/signin' className='underline'><h2>Signin here</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
