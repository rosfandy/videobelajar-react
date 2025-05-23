import { useState } from "react"
import { IconBaseProps } from "react-icons"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface TextInputProps {
    label?: string,
    icon?: IconBaseProps,
    placeholder?: string,
    name?: string
    required?: boolean
}

export const PasswordInput = (props: TextInputProps) => {   
    const { label, name, required = false } = props
    const [showPw, setShowPw] = useState(false)

    return (
        <div className="flex flex-col gap-y-2">
            {label && <label className="text-[#333333AD]" htmlFor={name}>{label}
                {required && <span className="text-red-500"> *</span>}
            </label>}
            <div className="flex items-center w-full border px-4 py-2 rounded-md">
                <input className="outline-none w-full" type={showPw ? "text" : "password"} name={name}
                    id={name} />
                <button type="button" onClick={() => setShowPw(!showPw)} className="cursor-pointer text-[#333333AD]">
                    {showPw ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
        </div>
    )
}