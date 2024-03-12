import Header from "./header"
import Footer from "./footer"
export default function Layout({ children, title }) {
    return (
        <div className="bg-gray-light flex flex-col justify-between min-h-screen">
            <Header />
            <main className="py-4 px-12 w-full md:w-[76%] mx-auto flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
