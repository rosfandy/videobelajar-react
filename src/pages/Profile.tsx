import { useEffect, useState } from "react";
import { MainLayout } from "../layout/Main";
import { MdBook, MdPerson, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { Divider } from "../components/divider/Divider";
import { TextInput } from "../components/input/floating-label/TextInput";
import { Button } from "../components/button/Button";
import { SelectInput } from "../components/input/floating-label/SelectInput";
import { GetRequest, PutRequest } from "../services/api";
import ProfileForm from "../components/form/Form";

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
                    <ProfileForm
                        data={data}
                        onSubmit={submitForm}
                        success={success}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </MainLayout>
    );
}
