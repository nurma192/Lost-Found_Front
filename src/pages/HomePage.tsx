import React, {useState} from 'react';
import {useCategoriesData} from "../api/categoriesApi";

function HomePage() {
    const categoriesData = useCategoriesData();
    const [selectedCategoryId, setSelectedCategoryId] = useState('')
    const [subPage, setSubPage] = useState('lostPage')
    // useEffect(() => {
    //     console.log(categoriesData.data)
    // }, [categoriesData.isSuccess]);


    return (
        <>
            <div className=" w-full flex items-start">
                <div className="w-1/5 px-5">
                    <>
                        {categoriesData.isLoading && <h3>Loading ...</h3>}
                    </>
                    <>
                        {categoriesData.error && <h3>Error when get Categories</h3>}
                    </>
                    <>
                        {categoriesData.isSuccess &&
							<>
								<h3 className="font-bold text-lg text-neutral-700">Categories</h3>
								<div className="flex flex-col justify-start gap-2 ml-4 mt-2">
                                    {categoriesData.data.map(category => (
                                        <div className={`cursor-pointer flex justify-between ${selectedCategoryId === category.id && 'text-blue-500 font-bold'}`}
                                             onClick={() => setSelectedCategoryId(category.id)}
                                             key={category.id}>
                                            <p>{category.name}</p>
                                            <p> ({category.lostItemsCount})</p>
                                        </div>
                                    ))}
								</div>
							</>
                        }
                    </>

                </div>
                <div className="w-4/5 pl-8 flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex">
                            <button className="px-4 py-2" onClick={() => setSubPage("lostPage")}>
                                <h3 className={`border-b-4 ${subPage === 'lostPage' ? 'border-blue-500 text-blue-500 font-bold' : 'border-white'}`}>Lost Items</h3>
                            </button>
                            <button className="px-4 py-2" onClick={() => setSubPage("foundPage")}>
                                <h3 className={`border-b-4 ${subPage === 'foundPage' ? 'border-blue-500 text-blue-500 font-bold' : 'border-white'}`}>Found Items</h3>
                            </button>
                        </div>
                        <div className="">
                            <h3>Sort by: Default sorting</h3>
                        </div>
                    </div>

                    <div className="">

                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;
