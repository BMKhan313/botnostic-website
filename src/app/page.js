import Review from '@/components/Review'
import Header from '@/components/Header'
import News from '@/components/News'
import Products from '@/components/Products'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col">
     <div>
      <Header />
     </div>
     <div >
     <Products />
     </div>
    
     <div >
     <News />
      </div>
      <div>
        {/* <Review /> */}
      </div>
      <div>
        <Footer />
      </div>
     </div> 
  )
}


/* saman 1 3 */


