import { unstable_noStore as noStore } from 'next/cache'
import {getCabins} from '@/app/_lib/data-service'
import CabinCard from './cabinCard'

const CabinList =async ({params}) => {
    noStore()
    
    const cabins = await getCabins()
    let updatedCabins
    if(params === "all") updatedCabins = cabins
    if(params === "small"){
        updatedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2)
    }
    if(params === "medium"){
        updatedCabins = cabins.filter((cabin) => cabin.maxCapacity > 2 && cabin.maxCapacity <= 4)
    }
    if(params === "large"){
        updatedCabins = cabins.filter((cabin) => cabin.maxCapacity > 4 && cabin.maxCapacity <= 10)
    }
    if(cabins.length < 1 ) return null
  return (
    
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-12">
            {updatedCabins.map((cabin) => (
              <CabinCard cabin={cabin} key={cabin.id} />
            ))}
          </div>
        
  )
}

export default CabinList
