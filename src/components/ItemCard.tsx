import React from 'react';
import {Item} from "../types/itemTypes";
import {Image, Skeleton} from "@nextui-org/react";

interface Props {
    item: Item
}

function ItemCard({item}: Props) {
    return (
        <div className={`cursor-pointer hover:bg-neutral-100 transition p-2 rounded w-[250px]`}>
            <Image width={300}
                   height={200}
                   className={`w-[250px] h-[250px] object-cover mb-8`}
                   src={`${process.env.REACT_APP_API_URL}/${item.images[0]}`} alt=""/>
            <p className={`font-bold text-xl`}>{item.name}</p>
            <p className={`text-sm`}>{item.category.name}</p>
        </div>
    );
}
function SkeletonCard() {
    return (
        <div className="w-[250px] space-y-5 p-4 rounded-lg">
            <Skeleton className="rounded-lg">
                <div className="h-[200px] w-full rounded-lg bg-secondary"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                </Skeleton>
            </div>
        </div>
    )
}

export {ItemCard, SkeletonCard};
