import { useEffect, useState } from "react";
import { MainLayout } from "../layout/Main";
import { MdBook, MdPerson, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { Divider } from "../components/divider/Divider";
import { TextInput } from "../components/input/floating-label/TextInput";
import { Button } from "../components/button/Button";
import { SelectInput } from "../components/input/floating-label/SelectInput";
import { GetRequest, PutRequest } from "../utils/request";

export default function Profile() {
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [success, setSuccess] = useState("");
    const token = sessionStorage.getItem('token');

    const fetchData = async () => {
        setIsLoading(true);
        const res = await GetRequest(`/users/${token}`);
        if (res.status == 200) setData(res?.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const submitForm = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        const res = await PutRequest(`/users/${token}`, payload);
        if (res.status == 200) setSuccess("Profil berhasil diubah");
        setTimeout(() => {
            setSuccess("");
        }, 1000);
    };

    return (
        <MainLayout>
            <div className="md:min-h-fit pt-[64px] flex lg:flex-row flex-col gap-x-[36px] gap-y-4 pb-12">
                <div className="lg:w-1/2 xl:w-1/4">
                    <div>
                        <h1 className="font-bold text-[24px]">Ubah Profil</h1>
                        <p className="text-[#333333AD]">Ubah data diri Anda</p>
                    </div>
                    <div className="flex flex-col gap-y-2 bg-white border border-[#3A35411F] p-8 mt-4 rounded-md text-lg">
                        <div className="flex cursor-pointer items-center gap-x-4 px-4 py-3 rounded-md bg-[#FFF7D7CC] border-2 border-[#FFBD3A] text-[#FFBD3A] font-semibold">
                            <MdPerson size={24} />
                            Profil Saya
                        </div>
                        <div className="flex cursor-pointer items-center gap-x-4 px-4 py-3 rounded-md text-[#3A354161] font-semibold ">
                            <MdBook size={24} />
                            Kelas Saya
                        </div>
                        <div className="flex cursor-pointer items-center gap-x-4 px-4 py-3 rounded-md text-[#3A354161] font-semibold ">
                            <MdShoppingBasket size={24} />
                            Pesanan Saya
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white border h-fit p-8 border-[#3A35411F] rounded-md">
                    {success && <p className="text-green-500 pb-4">{success}</p>}
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20 text-gray-500 text-lg">
                            Loading...
                        </div>
                    ) : (
                        <>
                            <div className="flex md:items-start items-center gap-x-4">
                                <img
                                    className="md:w-auto w-auto md:h-[92px] h-[60px] rounded-md"
                                    src={data?.avatar || 'https://www.w3schools.com/howto/img_avatar.png'}
                                    alt=""
                                />
                                <div className="-space-y-1">
                                    <div className="md:text-[20px] font-bold">{data.name}</div>
                                    <div className="md:text-[18px]">{data.email}</div>
                                    <Link className="md:text-base text-[#F64920] font-semibold text-sm" to={""}>
                                        Ganti Foto Profil
                                    </Link>
                                </div>
                            </div>
                            <Divider />
                            <form onSubmit={submitForm}>
                                <div className="flex xl:flex-row flex-col xl:items-center gap-y-4 gap-x-4">
                                    <div className="xl:w-1/3">
                                        <TextInput label="Nama Lengkap" name="name" value={data.name} />
                                    </div>
                                    <div className="xl:w-1/3">
                                        <TextInput label="E-Mail" name="email" value={data.email} />
                                    </div>
                                    <div className="flex xl:w-1/2 w-full gap-x-4">
                                        <div className="xl:w-1/4 w-1/2">
                                            <SelectInput name="telp_code" options={[{ label: "+62", value: "id" }]} value="id" />
                                        </div>
                                        <div className="w-full">
                                            <TextInput label="No. Hp" name="telp" value={data.telp} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="lg:w-fit w-full py-4">
                                        <Button type="submit" text="Simpan" variant="success" className="font-normal" />
                                    </div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
