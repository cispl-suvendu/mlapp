import { revalidateTag } from 'next/cache'
export default async function getServicesByCat(id) {
    const res = await fetch(`https://multilevelapp-api.vercel.app/api/v1/global/services/groupby/category/${id}`, { next: { tags: ['serviceByCat'] } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    revalidateTag('serviceByCat')
    return res.json()
}

