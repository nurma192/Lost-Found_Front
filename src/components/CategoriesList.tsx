import React, {useEffect} from 'react';
import {useCategoriesData} from "../api/categoriesApi";
import {Skeleton} from "@nextui-org/react";
import {useCustomParams} from "../hooks/useCustomParams";


interface Props {
    pageNameState: ('lost' | 'found');
}

function CategoriesList({pageNameState}: Props) {
    const {data, error, isLoading, isFetching, isSuccess, refetch} = useCategoriesData();
    const customParams = useCustomParams()

    useEffect(() => {
        refetch().catch(error => {
            console.log(error)
        })
    }, [customParams.searchParams, pageNameState]);
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
                            className={`cursor-pointer flex justify-between ${customParams.getCategoryFromParam() === category.id && 'text-blue-500 font-bold'}`}
                            onClick={() => customParams.setCategoryToParam(category.id)}
                            key={category.id}>
                            <p>{category.name}</p>
                            {pageNameState === 'lost' && <p>({category.lostItemsCount})</p>}
                            {pageNameState === 'found' && <p>({category.foundItemsCount})</p>}
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
}

export default CategoriesList;
