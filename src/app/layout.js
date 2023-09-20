import './globals.css'
import { Inter, Oxygen } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oxygen = Oxygen({subsets: ['latin'], weight: '700'})

export const metadata = {
  title: 'Botnostic solutions',
  description: 'Botnostic solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // <html lang="en">
    // <body className="bg-[#EFEFEF] font-poppins flex overflow-y-hidden" >
    //    <div className='flex overflow-hidden w-full'>
    //     {/* <Providers store={store}> */}
    //       <div className='flex flex-col  overflow-y-auto w-[100%]'>
    //       {children}
    //       </div>
    //       {/* </Providers> */}
    //    </div>
    //   </body>
    //   </html>
  )
}
