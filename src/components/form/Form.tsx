import React from 'react';
import { Link } from "react-router-dom";
import { Divider } from '../divider/Divider';
import { TextInput } from '../input/default/TextInput';
import { SelectInput } from '../input/floating-label/SelectInput';
import { Button } from '../button/Button';
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { PutRequest } from '../../services/api';
import { setData } from '../../slices/apiSlice';

interface ProfileFormProps {
    success: string;
    setSuccess: (val: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ success, setSuccess }) => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector((state) => state.api);
    const token = sessionStorage.getItem("token");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const payload = Object.fromEntries(formData);

        if (!token) return;
        const res = await PutRequest(`/users/${token}`, payload);
        if (res.status === 200) {
            dispatch(setData(payload));
            setSuccess("Profil berhasil diubah");
            setTimeout(() => setSuccess(""), 1500);
        }
    }

    return (
        <div>
            {success && <p className="text-green-500 pb-4">{success}</p>}
            {loading ? (
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
                            <div className="md:text-[20px] font-bold">{data?.name}</div>
                            <div className="md:text-[18px]">{data?.email}</div>
                            <Link className="md:text-base text-[#F64920] font-semibold text-sm" to={""}>
                                Ganti Foto Profil
                            </Link>
                        </div>
                    </div>
                    <Divider />
                    <form onSubmit={onSubmit}>
                        <div className="flex xl:flex-row flex-col xl:items-end gap-y-4 gap-x-4">
                            <div className="xl:w-1/3">
                                <TextInput label="Nama Lengkap" name="name" value={data?.name} />
                            </div>
                            <div className="xl:w-1/3">
                                <TextInput label="E-Mail" name="email" value={data?.email} />
                            </div>
                            <div className="xl:w-1/3">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-[#333333AD]">No. Hp</label>
                                    <div className="flex gap-x-4">
                                        <div className="w-1/4">
                                            <SelectInput name="telp_code" options={[{ label: "+62", value: "id" }]} value="id" />
                                        </div>
                                        <div className="w-3/4">
                                            <div className="flex items-center w-full border px-4 py-2 rounded-md">
                                                <input className="outline-none w-full" type="tel" name="telp" value={data?.telp} />
                                            </div>
                                        </div>
                                    </div>
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
    );
};

export default ProfileForm;
