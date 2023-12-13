import Link from "next/link"

export default function Category({ _id, name, caturl, catstatus, createdAt }) {
    return (
        <div className="bg-white rounded shadow hover:bg-active hover:animate-pulse">
            <Link href={`/category/${_id}`} className="font-sans text-sm capitaliz flex items-center justify-center text-center p-4 min-h-[80px] hover:text-white">{name} service</Link>
        </div>
    )
}
