import React, {useState} from 'react';
import LostItems from "../components/LostItems";
import FoundItems from "../components/FoundItems";
import CategoriesList from "../components/CategoriesList";
import {useSearchParams} from "react-router-dom";

function HomePage() {
    const [subPage, setSubPage] = useState('lostPage') // lostPage || foundPage
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSetSubPage = (pageName: string) => {
        searchParams.delete("category")
        setSearchParams(searchParams)
        setSubPage(pageName)
    }

    return (
        <>
            <div className=" w-full flex items-start">
                <div className="w-1/5 px-5">
                    {<CategoriesList pageNameState={subPage}/>}

                </div>
                <div className="w-4/5 pl-8 flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex">
                            <button className="px-4 py-2" onClick={() => handleSetSubPage("lostPage")}>
                                <h3 className={`border-b-3 ${subPage === 'lostPage' ? 'border-blue-500 text-blue-500 font-bold' : 'border-white'}`}>Lost
                                    Items</h3>
                            </button>
                            <button className="px-4 py-2" onClick={() => handleSetSubPage("foundPage")}>
                                <h3 className={`border-b-3 ${subPage === 'foundPage' ? 'border-blue-500 text-blue-500 font-bold' : 'border-white'}`}>Found
                                    Items</h3>
                            </button>
                        </div>
                        <div className="">
                            <h3>Sort by: Default sorting</h3>
                        </div>
                    </div>

                    <div className="pl-4 ">
                        {subPage === 'lostPage' && <LostItems/>}
                        {subPage === 'foundPage' && <FoundItems/>}
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;
