import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-black pt-8 pb-9 container flex justify-between'>
                <img src="./logo.svg" alt="" />
                <div className='flex text-white gap-8'>
                    <Link href={"/"}>HOME</Link>
                    <Link href={"/headphones"}>HEADPHONES</Link>
                    <Link href={"/speakers"}>SPEAKERS</Link>
                    <Link href={"/earphones"}>EARPHONES</Link>
                </div>
                <img src="./cart.png" alt="" />
            </div>
            <div className="container">
                <div className="h-[1px] bg-white w-full"></div>
            </div>

        </>
    )
}

export default Navbar