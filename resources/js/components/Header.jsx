import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { list } = useWishList();
    const { cartList } = useCart();

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className='sticky top-0 z-40 border-b border-slate-200 bg-white/95 text-sm shadow-sm backdrop-blur'>
            <div className='mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between'>
                <div className='flex items-center justify-between'>
                    <Link
                        to="/"
                        className="logo text-xl font-bold"
                        onClick={toggleMenu}
                    >
                        ShoeVista
                    </Link>

                    <button onClick={toggleMenu} className="md:hidden flex items-center">
                        {isOpen ? (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden md:flex'}`}>
                    <ul className='flex flex-col md:flex-row md:gap-4 md:pr-6'>
                        {['/', '/shoes/men', '/shoes/women', '/shoes/kids', '/about-us'].map((path, index) => {
                            const labels = ['Home', 'Men', 'Women', 'Kids', 'About Us'];
                            return (
                                <li key={path} className='rounded p-2 transition-all duration-300 delay-100 hover:bg-slate-100'>
                                    <NavLink
                                        to={path}
                                        onClick={toggleMenu}
                                        className={({ isActive }) => `${isActive ? 'font-extrabold' : ''}`}
                                    >
                                        {labels[index]}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-2 flex items-center gap-4 md:mt-0">
                        <Search />
                        <div className='flex items-center gap-4'>
                            <NavLink to="/wishlist" onClick={toggleMenu}>
                                <div className='relative'>
                                    <span className='absolute bottom-4 left-4 w-4 rounded-xl bg-gray-900 text-center text-xs text-white'>
                                        {list.length > 0 ? list.length : ''}
                                    </span>
                                    <img src="/Navbar/wishlist.png" alt="wishlist" className='h-6 w-6 hover:scale-110' />
                                </div>
                            </NavLink>
                            <NavLink to="/cart" onClick={toggleMenu}>
                                <div className='relative'>
                                    <span className='absolute bottom-4 left-4 w-4 rounded-xl bg-gray-900 text-center text-xs text-white'>
                                        {cartList.length > 0 ? cartList.length : ''}
                                    </span>
                                    <img src="/Navbar/cart.png" alt="cart" className='h-6 w-6 hover:scale-110' />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;