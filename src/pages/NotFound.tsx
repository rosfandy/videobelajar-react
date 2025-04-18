import { MainLayout } from "../layout/Main";

export default function NotFound() {
    return (
        <>
            <MainLayout>
                <div className="flex justify-center items-center h-[90vh] md:pt-20 pt-12 pb-12 bg-[#FFFDF3]">
                    <h1 className="text-3xl text-black/50">
                        404 | Not Found
                    </h1>
                </div>
            </MainLayout>
        </>
    )
}