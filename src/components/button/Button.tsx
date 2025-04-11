import { cva } from "class-variance-authority"
import { cn } from "../../utils/utils"
import { ReactNode } from "react"

interface ButtonInterface {
    text: string,
    variant?: 'default' | 'success' | 'successLight' | 'warning',
    className?: string,
    type?: HTMLButtonElement['type'],
    icon?: ReactNode,
    onClick?: () => void
}

const Variants = cva('cursor-pointer w-full text-center py-2 px-4 rounded-xl font-bold transition-all', {
    variants: {
        variant: {
            warning: 'bg-[#FFBD3A] outline-[#FFBD3A] text-white hover:bg-[#e8ac35]',
            default: 'border rounded-md outline-slate-300 hover:bg-gray-100',
            successLight: 'bg-[#e2fcd9cc] outline-[#cdfcbd] text-[#3ECF4C] hover:bg-[#cdfcbd]',
            success: 'bg-[#3ECF4C] outline-[#2fad3a] text-white hover:bg-[#2fad3a]'
        },
    },
    defaultVariants: {
        variant: 'default',
    }
})

export const Button = (props: ButtonInterface) => {
    const { text, variant, className, type = 'button', icon: Icon, onClick } = props
    return (
        <button onClick={onClick} type={type} className={cn(Variants({ variant }), className, 'flex items-center gap-x-2 justify-center')}>
            {Icon && Icon}
            <div>{text}</div>
        </button>
    )
}