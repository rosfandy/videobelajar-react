import IconGoogle from "@/assets/google.svg";
import { Button } from "../components/button/Button";
import { PasswordInput } from "../components/input/PasswordInput";
import { TextInput } from "../components/input/TextInput";
import { AuthNavbar } from "../components/navbar/AuthNavbar";
import { FormLayout } from "../layout/Form";
import { Divider } from "../components/divider/Divider";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "../components/input/PhoneInput";

export default function Register() {
    const navigate = useNavigate();

    const formSubmit = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <AuthNavbar />
            <div className="flex justify-center items-center min-h-screen md:pt-20 pt-12 pb-12 bg-[#FFFDF3]">
                <FormLayout onSubmit={formSubmit} title="Pendaftaran Akun" description="Yuk, lanjutin belajarmu di videobelajar.">
                    <div className="space-y-2 pb-8">
                        <TextInput required={true} label="Nama Lengkap" name="name" />
                        <TextInput required={true} label="E-Mail" name="email" />
                        <div className="space-y-2">
                            <label className="text-[#333333AD]" htmlFor="phone">No. Hp <span className="text-red-500"> *</span></label>
                            <div className="flex items-center gap-x-4">
                                <PhoneInput required={true} name="phone" className="w-1/3" />
                                <TextInput required={true} name="email" className="w-full" />
                            </div>
                        </div>
                        <PasswordInput required={true} label="Kata Sandi" name="password" />
                        <PasswordInput required={true} label="Konfirmasi Kata Sandi" name="password" />
                    </div>
                    <div className="space-y-4">
                        <Button text="Daftar" type="submit" className="w-full" variant="success" />
                        <Button onClick={() => { navigate('/login') }} text="Masuk" type="button" className="w-full" variant="successLight" />
                    </div>
                    <Divider text="atau" />
                    <Button text="Daftar dengan Google" type="submit" className="w-full font-[500]" icon={<img src={IconGoogle} />} />
                </FormLayout>
            </div>
        </>
    )
}