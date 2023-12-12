"use client"
import { useRootContext } from "@/context/RootContext"
import Category from "./category"
export default function AllCategory({ allCategory }) {
    const { searchKey } = useRootContext()
    const filterdCategory = allCategory.filter(item => {
        return (
            item
                .name
                .toLowerCase()
                .includes(searchKey.toLowerCase())
        );
    })
    return (
        <>
            {allCategory && filterdCategory.map(item => {
                return (
                    <Category key={item._id} {...item} />
                )
            })}
        </>
    )
}
