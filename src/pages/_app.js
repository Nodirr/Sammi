import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { CartProvider } from "react-use-cart";
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
     
   <CartProvider>
   <Nav/>
   <Sidebar/>
   <Component {...pageProps} />
   </CartProvider>
    </main>
  )
}
