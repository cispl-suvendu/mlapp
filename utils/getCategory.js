export default async function getCategory() {
    const res = await fetch('https://multilevelapp-api.vercel.app/api/v1/global/services/category/all', { next: { tags: ['allCat'] } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    revalidateTag('allCat')
    return res.json()
}

