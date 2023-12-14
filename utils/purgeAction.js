
import { revalidateTag } from 'next/cache'

export default async function purgeCatchA() {
    'use server'
    revalidateTag('a')
}

export default async function purgeCatchB() {
    'use server'
    revalidateTag('b')
}