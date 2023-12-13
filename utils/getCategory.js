export default async function getCategory() {
    const res = await fetch('https://multilevelapp-api.vercel.app/api/v1/global/services/category/all')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

