export const Divider = ({ text = null }: { text?: string | null }) => {
    return (
        <div className="flex items-center justify-between my-4">
            <hr className="border-[#3A35411F]  w-full" />
            {text && <div className="flex justify-center">
                <div className="bg-white px-4 text-[#333333AD]">{text}</div>
            </div>}
            <hr className="border-[#3A35411F]  w-full" />
        </div>
    )
}