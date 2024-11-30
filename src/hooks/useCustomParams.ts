import {useSearchParams} from "react-router-dom";

export const useCustomParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    function getCategoryFromParam(): string {
        const category = searchParams.get("category");
        return category ? category : '';
    }

    function getQueryFromParam(): string {
        const query = searchParams.get('query');
        return query ? query : '';
    }

    function getPageFromParam(): number {
        const page = Number(searchParams.get("page"));
        return page ? page : 1;
    }

    function setPageToParam(page: number) {
        const currentParams = new URLSearchParams(searchParams);
        currentParams.set('page', page.toString());
        setSearchParams(currentParams);
    }

    return {
        searchParams,
        getCategoryFromParam,
        getQueryFromParam,
        getPageFromParam,
        setSearchParams,
        setPageToParam
    }
}