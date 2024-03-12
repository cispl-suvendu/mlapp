import getCategory from "@/utils/getCategory"
import Layout from "@/components/layout/layout"
import AllCategory from "@/components/category/allCategory"
import HeroSlider from "@/components/Slider/HeroSlider"
import Title from "@/components/layout/Title"



export default async function Home() {
  const category = await getCategory()
  const activeCat = category.filter(item => item.catstatus === true).reverse()
  return (
    <div>
      <Layout>
        <div className="my-6 text-center">
          <h2 className="text-dark text-xl md:text-4xl font-bold">Bringing Thousands of <span className="text-active block">Services to Your Doorstep</span></h2>
          <p className="text-gray-dark mt-2 text-xs md:text-[16px]">convenience, accessibility, and a wide range of services available at the customer's convenience.</p>
        </div>
        <HeroSlider services={activeCat} />
        <Title title={`Active Services (${activeCat.length})`} />
        <section className="grid md:grid-cols-3 gap-4 items-start">
          <AllCategory allCategory={activeCat} />
        </section>
      </Layout>
    </div>
  )
}
