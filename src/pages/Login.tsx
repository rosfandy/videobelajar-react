import IconGoogle from "@/assets/google.svg";
import { Button } from "../components/button/Button";
import { PasswordInput } from "../components/input/default/PasswordInput";
import { TextInput } from "../components/input/default/TextInput";
import { AuthNavbar } from "../components/navbar/AuthNavbar";
import { FormLayout } from "../layout/Form";
import { Divider } from "../components/divider/Divider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const LoginRequest = async (payload: any) => {
        const storedUser = localStorage.getItem('user');

        if (!storedUser) {
            return {
                status: 400,
                data: { message: 'Akun tidak terdaftar' },
            };
        }

        const user = JSON.parse(storedUser);

        const isValid =
            user.email === payload.email && user.password === payload.password;

        return isValid
            ? {
                status: 200,
                data: { access_token: 'token' },
            }
            : {
                status: 400,
                data: { message: 'Invalid email or password' },
            };
    }

    const formSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        const response = await LoginRequest(payload);

        if (response?.status == 200 && response.data?.access_token) {
            setLoading(false)
            setSuccess("Success Login!")
            sessionStorage.setItem('token', response?.data.access_token)
            setTimeout(() => {
                navigate('/');
            }, 1000)
        } else {
            setLoading(false)
            setError(response?.data.message ?? 'Internal error')
            setTimeout(() => {
                setError('')
            }, 1000)
        }


    }
    return (
        <>
            <AuthNavbar />
            <div className="flex justify-center items-center min-h-screen md:pt-20 pt-12 pb-12 bg-[#FFFDF3]">
                <FormLayout onSubmit={formSubmit} title="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar.">
                    {success && <p className="text-green-500">{success}</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="space-y-2">
                        <TextInput required={true} label="E-Mail" name="email" />
                        <PasswordInput required={true} label="Password" name="password" />
                    </div>
                    <div className="flex justify-end w-full py-4">
                        <Link to="/reset-password" >Lupa Password?</Link>
                    </div>
                    <div className="space-y-4">
                        <Button text="Masuk" type="submit" className="w-full" variant="success" isLoading={loading} />
                        <Button onClick={() => { navigate('/register') }} text="Daftar" type="button" className="w-full" variant="successLight" />
                    </div>
                    <Divider text="atau" />
                    <Button text="Masuk dengan Google" type="submit" className="w-full font-[500]" icon={<img src={IconGoogle} />} />
                </FormLayout>
            </div>
        </>
    )
}