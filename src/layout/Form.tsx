export const FormLayout = (props: any) => {
    const { children, onSubmit, title, description } = props

    return (
        <form onSubmit={onSubmit} className="border border-[#3A35411F] bg-white p-6 rounded-md md:w-[590px] w-full mx-2">
            <div className="flex flex-col justify-center items-center mb-4">
                <h1 className="text-[28px] font-black ">{title}</h1>
                <p className="text-gray-600">{description}</p>
            </div>
            {children}
        </form>
    )
}