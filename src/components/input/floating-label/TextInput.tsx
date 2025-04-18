import { useEffect, useState } from "react";

interface TextInputProps {
    name: string;
    value?: string;
    label?: string;
}

export const TextInput = (props: TextInputProps) => {
    const { name, label, value } = props;

    const [isActive, setIsActive] = useState(false);
    const [data, setData] = useState(value ?? "");

    useEffect(() => {
        if (value) {
            setData(value);
        }
    }, [value]);

    const isFloating = isActive || Boolean(data);

    return (
        <div className="relative">
            <input
                name={name}
                id={name}
                type="text"
                className="border px-4 py-3 rounded-lg z-[10] focus:outline-[#3ECF4C] w-full"
                value={data}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                onChange={(e) => setData(e.target.value)}
            />
            {label && (
                <label
                    htmlFor={name}
                    className={`absolute px-2 z-[5] bg-white left-3 transition-all duration-200 cursor-text
                        ${isActive ? "text-[#3ECF4C]" : "text-[#333333AD]"}
                        ${isFloating ? "-mt-2 text-sm" : "mt-3"}
                    `}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
