import { IconBaseProps } from "react-icons"
import { cn } from "../../../utils/utils"

interface TextInputProps {
    label?: string,
    icon?: IconBaseProps,
    placeholder?: string,
    name?: string,
    className?: string,
    type?: string,
    required?: boolean
    value?: string
}

export const TextInput = (props: TextInputProps) => {
    const { label, name, required = false, className, type } = props
    return (
        <div className={cn(className, 'flex flex-col gap-y-2')}>
            {label && <label className="text-[#333333AD]" htmlFor={name}>{label}
                {required && <span className="text-red-500"> *</span>}
            </label>}
            <div className="flex items-center w-full border px-4 py-2 rounded-md">
                <input className="outline-none w-full" type={type} name={name} defaultValue={props.value}
                    id={name} />
            </div>
        </div>
    )
}