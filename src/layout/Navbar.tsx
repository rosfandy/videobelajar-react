import logo from '@/assets/Logo.jpg'
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'

interface Props {
    isDropdown?: boolean,
    setDropdown?: any
    children?: any
}

export const NavbarLayout = (props: Props) => {
    const { children, setDropdown, isDropdown } = props

    return (
        <div className="lg:px-[40px] xl:px-[120px] md:px-12 px-4 py-6 fixed w-full flex items-center justify-between bg-white md:shadow shadow-xl">
            <Link to="/" className="h-auto md:w-[193px] w-[152px]">
                <img src={logo} alt="" />
            </Link>
            <div className="md:inline hidden">
                <div className="">
                    {children}
                </div>
            </div>

            {/* Mobile */}
            <div onClick={() => setDropdown(!isDropdown)} className="md:hidden inline">
                <HiBars3 size={24} />
            </div>
            <div className="md:hidden inline absolute right-0 top-[70px] w-full z-[99] shadow-lg rounded-b bg-white">
                {children}
            </div>
        </div>
    )
}