export default async function getServicesByCat(id) {
    const res = await fetch(`https://multilevelapp-api.vercel.app/api/v1/global/services/groupby/category/${id}`, { next: { revalidate: 2 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

