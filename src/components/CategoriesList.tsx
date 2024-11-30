import React, {useEffect} from 'react';
import {useCategoriesData} from "../api/categoriesApi";
import {useSearchParams} from "react-router-dom";
import {Skeleton} from "@nextui-org/react";


interface Props {
    pageNameState: string;
}

function CategoriesList({pageNameState}: Props) {
    const {data, error, isLoading, isFetching, isSuccess,refetch} = useCategoriesData();
    const [searchParams, setSearchParams] = useSearchParams()

    const setCategoryId = (id: string) => {
        if (searchParams.get("category") === id) {
            console.log("deleting")
            searchParams.delete("category");
            setSearchParams(searchParams)
        } else {
            setSearchParams({category: id})
        }
    }
    useEffect(() => {
        refetch().catch(error => {
            console.log(error)
        })
    }, [pageNameState]);
    return (
        <div className="flex flex-col">
            <h3 className="font-bold text-lg text-neutral-700">Categories</h3>
            <div className="flex flex-col justify-start gap-2 ml-4 mt-2">
                <>
                    {(isLoading || isFetching) &&
						<>
							<Skeleton className="rounded-lg">
								<div className="h-8 rounded-lg bg-default-300"></div>
							</Skeleton>
							<Skeleton className="rounded-lg">
								<div className="h-8 rounded-lg bg-default-300"></div>
							</Skeleton>
							<Skeleton className="rounded-lg">
								<div className="h-8 rounded-lg bg-default-300"></div>
							</Skeleton>
                        </>
                    }
                    {error && <h3>Error when get Categories</h3>}
                    {isSuccess && !isFetching && data.map(category => (
                        <div
                            className={`cursor-pointer flex justify-between ${searchParams.get("category") === category.id && 'text-blue-500 font-bold'}`}
                            onClick={() => setCategoryId(category.id)}
                            key={category.id}>
                            <p>{category.name}</p>
                            {pageNameState === 'lostPage' && <p>({category.lostItemsCount})</p>}
                            {pageNameState === 'foundPage' && <p>({category.foundItemsCount})</p>}
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
}

export default CategoriesList;
