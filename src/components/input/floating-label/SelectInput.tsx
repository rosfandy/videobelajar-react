import { useEffect, useState } from "react";

interface SelectInputProps {
    name: string;
    label?: string;
    value?: string;
    options: { label: string; value: string }[];
}

export const SelectInput = (props: SelectInputProps) => {
    const { name, label, value, options } = props;

    const [data, setData] = useState(value ?? "");

    useEffect(() => {
        if (value) {
            setData(value);
        }
    }, [value]);


    return (
        <div className="relative">
            <select
                name={name}
                id={name}
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="border px-4 py-3 rounded-lg z-[10] focus:outline-[#3ECF4C] w-full bg-white"
            >
                <option value="" disabled hidden>
                    {label}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
