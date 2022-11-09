import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title ? title + ' - Amazona' : "Amazona"}</title>
                <meta name="description" content="Ecommerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-12 items-center justify-between p-4 shadow-md'>
                        <Link href='/' className='text-lg font-bold'>
                            Amazona
                        </Link>
                        <div>
                            <Link href='/cart' className='p-2'>cart</Link>
                            <Link href='/login' className='p-2'>Login</Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4 border border-black'>
                    {children}
                </main>
                <footer className='flex justify-center items-center h-10 shadow-inner'>
                    footer
                </footer>
            </div>
        </>
    )
}
