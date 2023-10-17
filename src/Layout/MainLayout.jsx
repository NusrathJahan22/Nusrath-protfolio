import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto '>
            <section className=''>
            <div className='py-5 shadow-xl bg-pink-300 flex justify-between px-10 '>
                <h2>Nusrath</h2>
                <p></p>
           <nav>
           <ul className='flex gap-3'>
        
        <li>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-pink-900 underline" : ""
        }
        >
        Home
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-pink-900 underline" : ""
        }
        >
        About
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/skills"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-pink-900 underline" : ""
        }
        >
        Skills
        </NavLink>
        </li>
        <li>
        <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-pink-900 underline" : ""
        }
        >
        Contact
        </NavLink>
        </li>
        </ul>
                
            </nav>
            
        
           
        </div>
        
            </section>
            <div>
            <Outlet></Outlet> 
            </div>   
        </div>
    );
};

export default MainLayout;