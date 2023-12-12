import Header from "./header"
import Footer from "./footer"
export default function Layout({ children, title }) {
    return (
        <div className="bg-gray-light flex flex-col justify-between min-h-screen">
            <Header />
            <main className="py-4 px-12 w-full md:w-[76%] mx-auto flex-1">
                <section className="mb-6 pt-4">
                    <h1 className="font-bold font-sans text-xs uppercase m-0">{title}</h1>
                </section>
                {children}
            </main>
            <Footer />
        </div>
    )
}
