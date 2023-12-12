import getCategory from "@/utils/getCategory"
import Layout from "@/components/layout/layout"
import AllCategory from "@/components/category/allCategory"
import { revalidateTag } from 'next/cache'


export default async function Home() {
  const category = await getCategory()
  const activeCat = category.filter(item => item.catstatus === true).reverse()
  return (
    <Layout title={`Active Services (${activeCat.length})`}>
      <section className="flex flex-col md:flex-row flex-wrap justify-between">
        <AllCategory allCategory={activeCat} />
      </section>
    </Layout>
  )
}
