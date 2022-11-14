import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Store } from '../utils/Store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react'


export default function Layout({ children, title }) {
    const isLogged = true
    const { state, dispatch } = useContext(Store)
    const {
        cart: { cartItems }
    } = state
    const [cartItemsCount, setCartItemsCount] = useState(0)
    useEffect(() => {
        setCartItemsCount(cartItems.reduce((a, c) => a + c.quantity, 0))
    }, [cartItems])
    return (
        <>
            <Head>
                <title>{title ? title + ' - Amazona' : "Amazona"}</title>
                <meta name="description" content="Ecommerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer position='bottom-center' limit={1} />

            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-12 items-center justify-between p-4 shadow-md'>
                        <Link href='/' className='text-lg font-bold'>
                            Amazon
                        </Link>
                        <div>
                            <Link href='/cart' className='p-2'>Cart {cartItemsCount > 0 && (
                                <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                                    {cartItemsCount}
                                </span>
                            )}</Link>
                            {isLogged ? 'parv' : (<Link href=' / login' className='p-2'>Login</Link>)}
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex justify-center items-center h-10 shadow-inner'>
                    Copyright @2022 Amazon
                </footer>
            </div>
        </>
    )
}
