"use client"
import { useRootContext } from "@/context/RootContext";
import Link from "next/link";
import { FiSearch } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';


export default function Header() {
  const { searchKey, setSearchKey } = useRootContext()
  return (
    <>
      <div className="bg-white shadow">
        <header className="w-full md:w-[76%] mx-auto px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-2xl font-sans uppercase py-2">
            <Link href='/'>ML <span className="text-active">App</span></Link>
          </div>
          <div className="w-full md:w-[78%] pb-4 md:pb-0">
            <form className="w-full relative">
              <FiSearch className="absolute left-4 top-[50%] translate-y-[-50%] text-white text-md" />
              <input type="text" name="keyword" placeholder="Serach" className="bg-active px-11 py-2 w-full rounded border-none outline-none font-sans text-sm text-white placeholder:text-white" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
              {searchKey !== "" && <IoIosCloseCircleOutline className="absolute right-4 top-[50%] translate-y-[-50%] text-white text-xl cursor-pointer" onClick={() => setSearchKey("")} />}
            </form>
          </div>
        </header>
      </div>
    </>
  )
}
