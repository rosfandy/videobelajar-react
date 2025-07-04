import IconGoogle from "@/assets/google.svg";
import { Button } from "../components/button/Button";
import { PasswordInput } from "../components/input/default/PasswordInput";
import { TextInput } from "../components/input/default/TextInput";
import { AuthNavbar } from "../components/navbar/AuthNavbar";
import { FormLayout } from "../layout/Form";
import { Divider } from "../components/divider/Divider";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "../components/input/default/PhoneInput";
import { useState } from "react";
import { PostRequest } from "../services/api";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')

    const formSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        const res = await PostRequest('/users', payload);

        if (res?.status == 201) {
            setLoading(false)
            setSuccess("Success Register!")
            navigate('/login');
        }
    }

    return (
        <>
            <AuthNavbar />
            <div className="flex justify-center items-center min-h-screen md:pt-20 pt-32 pb-12 bg-[#FFFDF3]">
                <FormLayout onSubmit={formSubmit} title="Pendaftaran Akun" description="Yuk, lanjutin belajarmu di videobelajar.">
                    {success && <p className="text-green-500">{success}</p>}
                    <div className="space-y-2 pb-8">
                        <TextInput required={true} label="Nama Lengkap" name="name" />
                        <TextInput type="email" required={true} label="E-Mail" name="email" />
                        <div className="space-y-2">
                            <label className="text-[#333333AD]" htmlFor="phone">No. Hp <span className="text-red-500"> *</span></label>
                            <div className="flex items-center gap-x-4">
                                <PhoneInput required={true} name="telp_code" className="md:w-1/3 w-1/2" />
                                <TextInput type="number" required={true} name="telp" className="w-full" />
                            </div>
                        </div>
                        <PasswordInput required={true} label="Kata Sandi" name="password" />
                        <PasswordInput required={true} label="Konfirmasi Kata Sandi" name="password" />
                    </div>
                    <div className="space-y-4">
                        <Button text="Daftar" type="submit" className="w-full" variant="success" isLoading={loading} />
                        <Button onClick={() => { navigate('/login') }} text="Masuk" type="button" className="w-full" variant="successLight" />
                    </div>
                    <Divider text="atau" />
                    <Button text="Daftar dengan Google" type="submit" className="w-full font-[500]" icon={<img src={IconGoogle} />} />
                </FormLayout>
            </div>
        </>
    )
}