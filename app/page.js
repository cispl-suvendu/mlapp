import getCategory from "@/utils/getCategory"
import Layout from "@/components/layout/layout"
import AllCategory from "@/components/category/allCategory"
import { revalidatePath } from 'next/cache'


export default async function Home() {
  const category = await getCategory()
  revalidatePath("/")
  const activeCat = category.filter(item => item.catstatus === true).reverse()
  return (
    <Layout title={`Active Services (${activeCat.length})`}>
      <section className="grid md:grid-cols-3 gap-4 items-start">
        <AllCategory allCategory={activeCat} />
      </section>
    </Layout>
  )
}
