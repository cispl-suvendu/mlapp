import Link from "next/link"

export default function Category({ _id, name, caturl, catstatus, createdAt }) {
    return (
        <div className="bg-white rounded p-6 shadow w-full md:w-[22%] flex items-center mb-6">
            <Link href={`/category/${_id}`} className="font-sans text-sm tracking-[1px] capitalize hover:text-active">{name} service</Link>
        </div>
    )
}
