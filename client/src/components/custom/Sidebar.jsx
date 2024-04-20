import React from 'react'
import logo from '../../assets/react.svg'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { navLinks } from '@/constants'


const Sidebar = () => {

    const pathname = useParams();

    return (
        <div className='hidden md:flex py-6 flex-col min-w-[270px] bg-dark-2 '>

            <Link to='/' className="gap-2 text-xl flex items-center p-4 px-6 font-extrabold ">
                <img src={logo} className="h-7" alt='logo' />
                <span >Blog-Flow</span>
            </Link>

            <div className="flex flex-col gap-4 justify-between h-full p-4">
                <div className='flex w-full p-2 hover:text-primary-500'>
                    <Link to='/signin'>
                        <Button variant='' >
                            <LogIn className="mr-2 h-4 w-4" /> Signin
                        </Button>
                    </Link>
                </div>
                <div className='grid p-4 gap-8'>
                    {navLinks.map(nav => {
                        return <Link to={nav.route} key={nav.name} className={`flex items-center group gap-3 p-3 hover:bg-primary-500 ${pathname === nav.route && 'bg-primary-500'} px-3 transition-all rounded`}>
                            <nav.icon className={`text-primary-500 transition-all group-hover:text-white ${pathname === nav.route && 'text-white'}`} />
                            <span>{nav.name}</span>
                        </Link>
                    })}
                </div>

                <div className='flex w-full p-2 hover:text-primary-500'>
                    <Button variant='' >
                        <LogIn className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
