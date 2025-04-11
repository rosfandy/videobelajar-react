import IconGoogle from "@/assets/google.svg";
import { Button } from "../components/button/Button";
import { PasswordInput } from "../components/input/PasswordInput";
import { TextInput } from "../components/input/TextInput";
import { AuthNavbar } from "../components/navbar/AuthNavbar";
import { FormLayout } from "../layout/Form";
import { Divider } from "../components/divider/Divider";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const formSubmit = (e: any) => {

    }

    return (
        <>
            <AuthNavbar />
            <div className="flex justify-center items-center min-h-screen md:pt-20 pt-12 pb-12 bg-[#FFFDF3]">
                <FormLayout onSubmit={formSubmit} title="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar.">
                    <div className="space-y-2">
                        <TextInput required={true} label="E-Mail" name="email" />
                        <PasswordInput required={true} label="Password" name="password" />
                    </div>
                    <div className="flex justify-end w-full py-4">
                        <Link to="/reset-password" >Lupa Password?</Link>
                    </div>
                    <div className="space-y-4">
                        <Button text="Masuk" type="submit" className="w-full" variant="success" />
                        <Button onClick={() => { navigate('/register') }} text="Daftar" type="button" className="w-full" variant="successLight" />
                    </div>
                    <Divider text="atau" />
                    <Button text="Masuk dengan Google" type="submit" className="w-full font-[500]" icon={<img src={IconGoogle} />} />
                </FormLayout>
            </div>
        </>
    )
}