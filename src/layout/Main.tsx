import { Footer } from "../components/footer/Footer"
import { AuthNavbar } from "../components/navbar/AuthNavbar"
import { MainNavbar } from "../components/navbar/MainNavbar"

export const MainLayout = (props: any) => {
    const { children } = props
    return (
        <>
            <MainNavbar />
            <div className="lg:px-[40px] xl:px-[120px] md:px-12 px-4 min-h-screen pt-20 bg-[#FFFDF3]">{children}</div>
            <Footer />
        </>
    )
}