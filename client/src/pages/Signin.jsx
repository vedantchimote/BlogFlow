import React from 'react'
import logo from '../assets/react.svg'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div className='border h-1/2 p-8 rounded-lg shadow-2xl shadow-green-400 grid gap-8'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        <img src={logo} />
                        <h2 className='font-extrabold'>Blog Flow</h2> 
                    </div>
                    <h2 className='font-bold underline'>Signin</h2>
                </div>
                <div className='grid gap-4'>
                    <Input type="email" placeholder="Email" className='bg-dark-4' />
                    <Input type="password" placeholder="Password" className='bg-dark-4' />
                </div>
                <div className='text-center text-light-3'>
                    <h2>Not have an account</h2>
                    <Link to='/signup' className='underline'><h2>Signup here</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default Signin
