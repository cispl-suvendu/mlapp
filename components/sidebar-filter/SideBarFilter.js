"use client"
import { useRootContext } from "@/context/RootContext"
import Range from "../range-slider/Range"
import { FaFilter } from "react-icons/fa6";
import { useState } from "react";
export default function SideBarFilter({ allServices }) {
  const { serviceSerachKey, setServiceSearchKey, serviceByVendorKey, setServiceByVendorKey } = useRootContext()
  const arrOfVendor = allServices.map(item => item.createdBy)
  const unique = [];
  const uniqueVnedors = arrOfVendor.filter(element => {
    const isDuplicate = unique.includes(element._id);
    if (!isDuplicate) {
      unique.push(element._id);
      return true;
    }
    return false;
  });

  const [showFilter, setShowFilter] = useState(false)

  const clearFilter = () => {
    setShowFilter(false)
    setServiceSearchKey("")
    setServiceByVendorKey("")
  }

  return (
    <>
      <div className="bg-active rounded p-2 shadow w-full flex justify-center items-center text-xs gap-2 md:hidden mb-6" onClick={() => setShowFilter(true)}>
        <FaFilter className="text-white" />
        <div className="text-white">Add Filter</div>
      </div>
      <div className={showFilter === true ? `bg-white absolute left-0 top-0 h-full w-full block` : `hidden md:block`}>
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded p-4 shadow w-full">
            <h2 className="font-bold font-sans text-xs m-0 text-gray-dark tracking-wider">Search within category</h2>
            <div className="mt-2">
              <input type="text" className="border w-full px-2 py-2 rounded border-gray-light3 text-sm text-gray-dark" placeholder="Search" value={serviceSerachKey} onChange={(e) => setServiceSearchKey(e.target.value)} />
            </div>
          </div>
          <div className="bg-white rounded p-4 shadow w-full">
            <h2 className="font-bold font-sans text-xs m-0 text-gray-dark tracking-wider">Filter by vendor</h2>
            <div className="mt-2">
              <select className="border w-full px-1 py-2 rounded border-gray-light3 cursor-pointer text-sm text-gray-dark" value={serviceByVendorKey} onChange={(e) => setServiceByVendorKey(e.target.value)}>
                <option value="">Select</option>
                {uniqueVnedors.map(item => {
                  return <option key={item._id} value={item._id}>{item.firstName} {item.lastName}</option>
                })}
              </select>
            </div>
          </div>
          <div className="bg-white rounded p-4 shadow w-full">
            <h2 className="font-bold font-sans text-xs m-0 text-gray-dark tracking-wider">Filter by cost</h2>
            <div className="mt-2">
              <Range allServicesInDesOrder={allServices} />
            </div>
          </div>
          <div className="block md:hidden bg-white rounded p-4 shadow w-full">
            <div className="flex justify-between items-center">
              <button onClick={() => clearFilter()} className="text-sm">Reset all</button>
              <button onClick={() => setShowFilter(false)} className="bg-active rounded p-2 text-white text-sm">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
