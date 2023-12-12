import getCategory from "@/utils/getCategory"
import getServicesByCat from "@/utils/getServicesByCat"
import Layout from "@/components/layout/layout"
import SideBarFilter from "@/components/sidebar-filter/SideBarFilter"
import ListAllService from "@/components/list-all-service/ListAllService"

export async function generateStaticParams() {
  const allCat = await getCategory()

  return allCat.map((cat) => ({
    id: cat._id,
  }))
}

export async function generateMetadata({ params: { id } }) {
  const allCat = await getCategory()
  const [currentCat] = await allCat.filter(item => item._id === id)
  return {
    title: `${currentCat.name} Service`,
    description: `Book ${currentCat.name} services at your home`
  }
}

export default async function Page({ params: { id } }) {
  const allCat = await getCategory()
  const [currentCat] = await allCat.filter(item => item._id === id)
  const allServices = await getServicesByCat(id)
  let content;
  if (allServices.length === 0) {
    content = <h2 className="font-sans italic text-sm bg-gray-dark text-white px-4 py-2 rounded">No Service Found for {currentCat.name}</h2>
  } else {
    content = <div className="flex flex-col md:flex-row justify-between items-start">
      <div className="w-full md:w-3/12">
        <div className="flex flex-col gap-6">
          <SideBarFilter allServices={allServices} />
        </div>
      </div>
      <div className="w-full md:w-[70%]">
        <ListAllService allServices={allServices.sort().reverse()} />
      </div>
    </div>
  }
  return (
    <Layout title={`${currentCat.name} service`}>
      {content}
    </Layout>
  )
}
