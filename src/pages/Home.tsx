import banner from '@/assets/banner.jpg'
import { Button } from '../components/button/Button';
import { Card } from '../components/card/Card';
import { cardItem } from '../cardItem';
import { MainLayout } from '../layout/Main';
import '../index.css'
import { useState } from 'react';

export default function Home() {
    const categoryItem = [
        {
            name: 'Semua Kelas',
            isActive: true
        },
        {
            name: 'Pemasaran',
            isActive: false
        },
        {
            name: 'Desain',
            isActive: false
        },
        {
            name: 'Pengembangan Diri',
            isActive: false
        },
        {
            name: 'Bisnis',
            isActive: false
        }
    ]
    const [category, _] = useState(categoryItem[0])

    return (
        <>
            <MainLayout>
                <div id="content" className="pt-12">
                    <div id="banner"
                        style={{ backgroundImage: `url(${banner})` }}
                        className="bg-cover bg-center w-full rounded-md text-white flex md:p-12 px-6 py-8 flex-col items-center justify-center text-center"
                    >
                        <h1 className="lg:text-[48px] md:text-[36px] text-[24px] lg:w-[800px] font-black">
                            Revolusi Pembelajaran:
                            Temukan Ilmu Baru melalui
                            Platform Video Interaktif!
                        </h1>
                        <p className="lg:w-[900px] text-[16px] py-4">
                            Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                            video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
                            interaktif yang akan meningkatkan pemahaman Anda.
                        </p>
                        <div className="flex mt-4">
                            <Button className='md:px-8 py-3 ' text='Temukan Video Course untuk Dipelajari!' variant='success' />
                        </div>
                    </div>
                </div>

                <div id="title" className="my-12">
                    <h1 className="font-bold md:text-[32px] text-[24px]">Koleksi Video Pembelajaran Unggulan</h1>
                    <p className="text-[#333333AD]">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                </div>

                <div id="category"
                    className="flex items-center lg:gap-x-12 md:gap-x-8 gap-x-12 font-semibold text-[#333333AD] overflow-x-auto">
                    {categoryItem.map((item, index) => (
                        <div key={index} className={`category-item cursor-pointer ${category.name === item.name ? 'class-active' : ''}`}>
                            <div className="">{item.name}</div>
                            <div className="bar mt-1 h-1"></div>
                        </div>
                    ))}
                </div>

                <div id="card-section" className="flex flex-wrap lg:gap-y-8 gap-y-4 justify-center gap-x-10 mt-4">
                    {cardItem.map((item, index) => (
                        <Card
                            key={index}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            authorImage={item.authorImage}
                            authorTitle={item.authorTitle}
                            authorCompany={item.authorCompany}
                            price={item.price}
                            rating={item.rating}
                            totalReview={item.totalReview}
                        />
                    ))}
                </div>

                <div id="newsletter" className="my-12">
                    <div
                        className="bg-[url(@/assets/banner_newsletter.png)] bg-cover bg-center w-full rounded-md text-white flex md:p-12 px-4 py-8 flex-col items-center justify-center text-center">
                        <div className="">
                            <div className="text-[#C1C2C4] text-[18px]">NEWSLETTER</div>
                            <div className="md:text-[32px] text-[24px] font-black">Mau Belajar Lebih Banyak?</div>
                            <p className="text-[#F4F5FA] md:w-[450px]">Daftarkan dirimu untuk mendapatkan informasi terbaru
                                dan
                                penawaran
                                spesial dari
                                program-program terbaik hariesok.id</p>
                        </div>
                        <div className="flex flex-col gap-y-4 md:w-fit w-full px-4 py-2 rounded-xl mt-10">
                            <div className="flex md:flex-row flex-col gap-x-2 bg-white rounded-xl px-6 py-2">
                                <input type="text"
                                    className="outline-none md:text-start text-center text-black md:w-[350px]" name=""
                                    id="" placeholder="Masukkan Emailmu" />
                                <div className='md:inline hidden' >
                                    <Button text='Subscribe' variant="warning" />
                                </div>
                            </div>
                            <div className='md:hidden inline'>
                                <Button text='Subscribe' variant="warning" />
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
