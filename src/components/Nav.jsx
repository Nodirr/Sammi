import Link from 'next/link';
import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Nav = () => {
    const {totalItems} = useCart()
    const isClient = useIsClient()
    
  return (
    <>
    <nav>
        <div className="container">
            <div className="n-main">
                <Link href={'/'} className="logo">
                 <img src="https://www.sammi.ac/logo.svg" alt="" />
                 <h1>Sammi</h1>
                </Link>
                <div className="utils">
                    <Link href={'/cart'} className="count">
                    <FaCartPlus className='cart-icon'/>
                {isClient &&  <sub>({totalItems})</sub>}
                    </Link>
                    <ClerkProvider>
                    <div className="clerk1">
                    <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
                    </div>
                    </ClerkProvider>

                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav