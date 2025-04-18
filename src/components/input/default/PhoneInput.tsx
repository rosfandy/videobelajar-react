import { IconBaseProps } from "react-icons"
import { cn } from "../../../utils/utils"
import Flag from 'react-world-flags'
import { useState } from "react"

interface TextInputProps {
    label?: string,
    icon?: IconBaseProps,
    placeholder?: string,
    name?: string,
    className?: string,
    required?: boolean
}

const countryOptions = [
    { code: "id", label: "+62" },
    { code: "my", label: "+60" },
    { code: "sg", label: "+65" },
];

export const PhoneInput = (props: TextInputProps) => {
    const { label, name, required = false, className } = props
    const [selectedCountry, setSelectedCountry] = useState("id");

    return (
        <div className={cn(className, 'flex flex-col gap-y-2')}>
            {label && <label className="text-[#333333AD]" htmlFor={name}>{label}
                {required && <span className="text-red-500"> *</span>}
            </label>}
            <div className="flex items-center w-full border rounded-md">
                <div className="bg-[#F4F5FA] px-1 py-2 rounded-l-md">
                    <Flag code={selectedCountry} className="w-[40px] h-[24px] py-[4px]" />
                </div>
                <select className="outline-none w-full bg-transparent px-1 py-2" onChange={(e) => setSelectedCountry(e.target.value)} name={name}
                    id={name}>
                    {countryOptions.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}