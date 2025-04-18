import logo from '@/assets/Logo.jpg'
import { IoChevronForward } from 'react-icons/io5'
import linkedinIcon from '@/assets/linkedin.svg';
import facebookIcon from '@/assets/facebook.svg';
import instagramIcon from '@/assets/instagram.svg';
import twitterIcon from '@/assets/twitter.svg';

export const Footer = () => {
    return (
        <div className="border border-[#3A35411F] p-8 shadow bg-white lg:px-[40px] xl:px-[120px] md:px-12 px-4">
            <div className="flex lg:flex-row flex-col justify-between lg:pb-20 pb-8 border-b border-[#3A35411F]">
                <div className="lg:w-1/4">
                    <img src={logo} alt="Logo" />
                    <div className="flex flex-col gap-y-2 mt-8">
                        <h3 className="font-bold text-[18px]">
                            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                        </h3>
                        <div>
                            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                            <p>+62-877-7123-1234</p>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-x-12 ">
                    {/* Kategori */}
                    <div className="lg:block hidden">
                        <h3 className="font-bold mb-4">Kategori</h3>
                        <div className="flex flex-col gap-y-4 text-[#333333AD] font-semibold">
                            <p>Digital & Teknologi</p>
                            <p>Pemasaran</p>
                            <p>Manajemen Bisnis</p>
                            <p>Pengembangan Diri</p>
                            <p>Desain</p>
                        </div>
                    </div>
                    <details className="lg:hidden mt-4 group">
                        <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                            Kategori
                            <IoChevronForward className="transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="mt-3 flex flex-col gap-y-3 text-gray-600 font-semibold">
                            <p>Digital & Teknologi</p>
                            <p>Pemasaran</p>
                            <p>Manajemen Bisnis</p>
                            <p>Pengembangan Diri</p>
                            <p>Desain</p>
                        </div>
                    </details>

                    {/* Perusahaan */}
                    <div className="lg:block hidden">
                        <h3 className="font-bold mb-4">Perusahaan</h3>
                        <div className="flex flex-col gap-y-4 text-[#333333AD] font-semibold">
                            <p>Tentang Kami</p>
                            <p>FAQ</p>
                            <p>Kebijakan Privasi</p>
                            <p>Ketentuan Layanan</p>
                            <p>Bantuan</p>
                        </div>
                    </div>
                    <details className="lg:hidden mt-4 group">
                        <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                            Perusahaan
                            <IoChevronForward className="transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="mt-3 flex flex-col gap-y-3 text-gray-600 font-semibold">
                            <p>Tentang Kami</p>
                            <p>FAQ</p>
                            <p>Kebijakan Privasi</p>
                            <p>Ketentuan Layanan</p>
                            <p>Bantuan</p>
                        </div>
                    </details>

                    {/* Komunitas */}
                    <div className="lg:block hidden">
                        <h3 className="font-bold mb-4">Komunitas</h3>
                        <div className="flex flex-col gap-y-4 text-[#333333AD] font-semibold">
                            <p>Tips Sukses</p>
                            <p>Blog</p>
                        </div>
                    </div>
                    <details className="lg:hidden mt-4 group">
                        <summary className="font-bold flex justify-between items-center cursor-pointer list-none">
                            Komunitas
                            <IoChevronForward className="transition-transform duration-200 group-open:rotate-90" />
                        </summary>
                        <div className="mt-3 flex flex-col gap-y-3 text-gray-600 font-semibold">
                            <p>Tips Sukses</p>
                            <p>Blog</p>
                        </div>
                    </details>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="py-4 flex md:flex-row flex-col-reverse md:items-center gap-y-4 justify-between">
                <div className="text-[#333333AD] font-bold md:text-[16px] text-[18px]">
                    @2023 Gerobak Sayur All Rights Reserved.
                </div>
                <div className="flex items-center gap-x-2">
                    <div className="border-2 border-[#333333AD]/50 p-2 rounded-full">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </div>
                    <div className="border-2 border-[#333333AD]/50 p-2 rounded-full">
                        <img src={facebookIcon} alt="Facebook" />
                    </div>
                    <div className="border-2 border-[#333333AD]/50 p-2 rounded-full">
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
                    <div className="border-2 border-[#333333AD]/50 p-2 rounded-full">
                        <img src={twitterIcon} alt="Twitter" />
                    </div>
                </div>
            </div>
        </div>
    )
}
