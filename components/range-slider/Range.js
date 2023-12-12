"use client"
import { useRootContext } from "@/context/RootContext";
import { useEffect } from "react"

export default function Range({ allServicesInDesOrder }) {
  const {serviceByCostKey, setServiceByCostKey} = useRootContext()
  const getAallCost = allServicesInDesOrder.map(item => item.cost)
  let maxPrice = Math.max(...getAallCost);
  let minPrice = 0;
  useEffect(()=> {
    setServiceByCostKey(maxPrice)
    return()=> {
      setServiceByCostKey(100)
    }
  },[maxPrice])
  return (
    <>
      <input className="slider" type="range" name="cost" min={minPrice} max={maxPrice} value={serviceByCostKey} onChange={(e) => setServiceByCostKey(e.target.value)} />
      <div className="font-bold font-sans text-xs text-gray-dark">Current filter value: <strong className="text-active">Rs: {serviceByCostKey} / hour</strong></div>
    </>
  )
}
