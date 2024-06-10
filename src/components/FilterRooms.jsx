"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  

  return (
    <div className="join m-2 rounded-none">
      <Button filter={"all"}>All Rooms</Button>
      <Button filter={"small"}>1-2 Guest </Button>
      <Button filter={"medium"}>2-4 Guest</Button>
      <Button filter={"large"}>More than 4 Guest</Button>
    </div>
  );
}

function Button({filter ,children }){
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get("capacity")?? "all"

    function handleFilter(val){
        const params = new URLSearchParams(searchParams)
        params.set("capacity",val)
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})


    }
    return (
        <button className={`btn join-item tracking-wider border-x-2 border-secondary border-0 ${activeFilter === filter? "bg-secondary text-accent-content":""}`} onClick={()=>handleFilter(filter)}>
            {children}
        </button>
    )

}
