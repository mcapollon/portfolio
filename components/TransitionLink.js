"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../app/utils/animation"

const TransitionLink = ({href, label, id}) => {
    const router = useRouter()
    const pathname = usePathname()

    const formatedLabel = label.toLowerCase()
    
    const handleClick = () => {
        if (pathname != href) {
            animatePageOut(href, router)
        }
    }

    return (
        <>
        <button onClick={handleClick} className={` inline-flex items-center my-3 px-1 pt-1 text-sm font-medium text-black font-mono peer`}>
            {label}
        </button>
        <div className={`${pathname == '/'+id ? 'absolute w-1 h-1 top-12 left-2/4 bg-cyan-700 rounded-xl' : 'transition-all ease-in-out duration-500 peer-hover:bg-cyan-600 absolute w-1 h-1 top-12 left-2/4 rounded-xl'}`}></div>
        </>
        
    )
}

export default TransitionLink