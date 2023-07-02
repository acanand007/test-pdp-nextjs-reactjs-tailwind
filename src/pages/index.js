import { Inter } from 'next/font/google'
import ProductCarousal from '@/components/productCarousal/ProductCarousal';
import appData from '../data/appData.json';
import Panel from '@/components/panel/Panel';
import PdpDetails from '@/components/pdpDetail/PdpDetails';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {productCarousal, bottomLink }  = appData;
  return (
    <div
      className={`flex bg-white min-h-screen flex-col items-center justify-between p-5 ${inter.className}`}
    >
      <div className="mx-auto flex max-w-12xl items-center">
        <div className='grid lg:grid-cols-3 gap-4'>
            <div className='w-150 hidden lg:flex'>
              <Panel />
            </div>
            <div className='w-400'>
                <ProductCarousal items={productCarousal}  />
            </div>
            <div className='w-150'>
              <PdpDetails />
            </div>
        </div>
        
      </div>
      <div className='flex mt-30'>
            <ul className='flex mt-10 gap-x-8'>
              {
                bottomLink?.map((item)=>{
                  return (
                    <li key={item?.id}>
                       <a className='underline decoration-1' href={item?.url}>
                            {item?.name}
                       </a>
                    </li>
                  )
                })
              }
            </ul>
        </div>
    </div>
  )
}
