import banner from '@/assets/banner.jpg'
import { Button } from '../components/button/Button';
import { Card } from '../components/card/Card';
import { cardItem } from '../cardItem';
import { MainLayout } from '../layout/Main';

export default function Home() {
    return (
        <>
            <MainLayout>
                <div id="content" className="py-12">
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
                            <Button className='px-8 py-3 ' text='Temukan Video Course untuk Dipelajari!' variant='success' />
                        </div>
                    </div>
                </div>

                <div id="card-section" className="flex flex-wrap lg:gap-y-8 gap-y-4 justify-center gap-x-10 mt-4 pb-24">
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
                        <div className="md:w-fit w-full px-4 py-2 rounded-xl mt-10">
                            <div className="flex gap-x-2 bg-white rounded-xl px-6 py-2">
                                <input type="text"
                                    className="outline-none md:text-start text-center text-black md:w-[350px]" name=""
                                    id="" placeholder="Masukkan Emailmu" />
                                <div>
                                    <Button text='Subscribe' variant="warning" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
