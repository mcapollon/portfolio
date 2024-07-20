"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../app/utils/animation"

const TransitionLink = ({href, label, id}) => {
    const router = useRouter()
    const pathname = usePathname()

    const formatedLabel = label.toLowerCase()
    console.log(pathname, 'pathName')
    console.log(id)
    
    const handleClick = () => {
        console.log(id)
        if (pathname != href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button onClick={handleClick} className={`transition-all ease-in-out duration-1000 inline-flex items-center ${pathname == '/'+id ? 'border-cyan-700' : 'border-transparent'} my-3 border-b-4  px-1 pt-1 text-sm font-medium text-black hover:border-cyan-600 font-mono`}>
            {label}
        </button>
    )
}

export default TransitionLink