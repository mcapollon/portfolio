"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../app/utils/animation"

const TransitionLink = ({href, label}) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname != href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button onClick={handleClick} className="transition-all ease-in-out duration-1000 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-black/90 font-mono">
            {label}
        </button>
    )
}

export default TransitionLink