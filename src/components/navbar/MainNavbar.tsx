import { Link } from 'react-router-dom'
import { NavbarLayout } from '../../layout/Navbar'
import { PiSignOutBold } from 'react-icons/pi'
import { useState } from 'react'
import { Button } from '../button/Button'

export const MainNavbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    const token = sessionStorage.getItem('token');

    const menuItem = [
        {
            name: 'Profil Saya',
            link: '/profile'
        },
        {
            name: 'Kelas Saya',
            link: '/class'
        },
        {
            name: 'Pesanan Saya',
            link: '/order'
        }
    ]

    const logout = () => {
        sessionStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <>
            <NavbarLayout setDropdown={setIsDropdown} isDropdown={isDropdown}>
                <div className="md:flex items-center gap-x-8 hidden">
                    <Link to="/category" className="text-[#333333AD]">Kategori</Link>
                    {token ?
                        <img onClick={() => setIsDropdown(!isDropdown)} className='w-[44px] h-auto rounded-xl cursor-pointer' src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CuOr3Yc7otSDkyXdEJJHE3gBMHMhsavmFIEOzSpMkZlmIBXuJXm7FIWovYF7HMwbio74vx3fK3RjU8hhPiZEm5GJF7fN0XjTI3DshS1SsrTZuHzTMTW7UfbqNms-uqznpdsJ0dylpeaJ2h2UD32ZYpth6R7Mi943YLr3oje1YfYQgs69juWB~8-ZSOv5qVww7qY39lNP5IhCf5ZNgmEPi4~VHIVkvFptLDzlHWkIiewgupwCHSmwoXyYZvkm75ggrEYIpkEZGvL~eGrct4hzKz-Zf4vBn27j5Ypk6UY8IRFp2mhDbKKH0fza7Jo1RRGhpScIt4eAL1El81HHBzvjDg__" alt="profile" />
                        :
                        <div className='flex items-center gap-x-4 '>
                            <Link to={'/login'}>
                                <Button text='Masuk' className='px-6 font-normal' variant='success' />
                            </Link>
                            <Link to={'/register'}>
                                <Button text='Register' className='px-6 bg-transparent border border-[#3ECF4C] text-[#3ECF4C] font-normal hover:text-white' variant='success' />
                            </Link>
                        </div>
                    }

                </div>

                {/* Dropdown */}
                {isDropdown &&
                    <div className="flex flex-col  py-2 absolute md:w-[200px] border shadow-lg w-full bg-white md:top-[90px] md:right-28 md:rounded-b-md">
                        <Link className='border-b px-4 py-3 transition-all items-center md:hidden' to='/category'>Kategori</Link>
                        {menuItem.map((item, index) => (
                            <Link key={index} className='border-b px-4 py-3 transition-all items-center hover:bg-[#3A35411F]' to={item.link}>{item.name}</Link>
                        ))}
                        <Link onClick={logout} className='border-b px-4 py-3 transition-all flex items-center gap-x-2 text-red-500' to="">
                            Keluar
                            <PiSignOutBold size={24} />
                        </Link>
                    </div>
                }
            </NavbarLayout>
        </>
    )
}