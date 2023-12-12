"use client"
import { useRootContext } from "@/context/RootContext"
import Service from "../service/service"
import { useEffect, useState } from "react"

export default function ListAllService({ allServices }) {
    const { serviceSerachKey, serviceByVendorKey, serviceByCostKey } = useRootContext()
    const [arrayToFilter, setArrayToFilter] = useState(allServices)

    const filterBySearchKey = (array) => {
        if (serviceSerachKey !== "") {
            return array.filter(item => {
                return (
                    item
                        .name
                        .toLowerCase()
                        .includes(serviceSerachKey.toLowerCase()) || item
                            .createdBy.firstName
                            .toLowerCase()
                            .includes(serviceSerachKey.toLowerCase())
                )
            });
        } else {
            return array;
        }
    }

    const filterByVendor = (array) => {
        if (serviceByVendorKey !== "") {
            return array.filter(item => item.createdBy._id === serviceByVendorKey);
        } else {
            return array;
        }
    }

    const filterByCost = (array) => {
        if (serviceByCostKey !== 0) {
            return array.filter(item => Number(item.cost) <= Number(serviceByCostKey));
        } else {
            return array;
        }
    }

    useEffect(() => {
        let result = allServices;
        result = filterBySearchKey(result);
        result = filterByVendor(result);
        result = filterByCost(result);
        setArrayToFilter(result);
    }, [serviceSerachKey, serviceByCostKey, serviceByVendorKey])


    return (
        <>
            {arrayToFilter.map(item => {
                return <Service key={item._id} {...item} />
            })}
        </>
    )
}
