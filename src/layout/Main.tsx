import { Footer } from "../components/footer/Footer"
import { MainNavbar } from "../components/navbar/MainNavbar"

export const MainLayout = (props: any) => {
    const { children } = props;
    return (
        <div className="flex flex-col min-h-screen bg-[#FFFDF3]">
            <MainNavbar />

            <main className="flex-grow lg:px-[40px] xl:px-[120px] md:px-12 px-4 pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
};
