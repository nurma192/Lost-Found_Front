import React, {useEffect} from 'react';
import {useFoundItems} from "../api/foundItemsApi";
import {useSearchParams} from "react-router-dom";
import {ItemCard, SkeletonCard} from "./ItemCard";

function FoundItems() {
    const [searchParams, setSearchParams] = useSearchParams();
    const {data, error, isLoading, isFetching, refetch} = useFoundItems(getCategoryFromParam())

    function getCategoryFromParam() {
        const category = searchParams.get("category");
        return category ? category : '';
    }

    useEffect(() => {
        refetch().catch(error => {
            console.log(error);})
    }, [searchParams]);

    if (isLoading || isFetching) {
        return <>
            {Array.from({ length: 16 }).map((_, index) => (
                <SkeletonCard key={index}/>
            ))}
        </>
    }
    if (error) return <h3>Error</h3>

    return (
        <>
            {data?.foundItems && data.foundItems.length === 0 && <h3>No items on this Category</h3>}
            {data?.foundItems && data.foundItems.map((foundItem, index) => (
                <ItemCard item={foundItem} key={index} />
            ))}
        </>
    );
}

export default FoundItems;
