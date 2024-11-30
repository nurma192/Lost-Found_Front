import {useQuery} from 'react-query';
import {Item} from "../types/itemTypes";

export interface FoundItemsRequest {
    foundItems: Item[],
    page: number;
    totalItems: number;
    totalPages: number;
}

export const getFoundItems = async (category: string = '', query: string = ''): Promise<FoundItemsRequest> => {
    let url = `${process.env.REACT_APP_API_URL}/api/found`;
    if (category) {
        url += `?category=${category}`;
    }if (query) {
        url += category ? `&query=${query}` : `?query=${query}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch getFoundItems');
    }

    return response.json();
};

export const useFoundItems = (category: string = '', query: string = '') => {
    return useQuery<FoundItemsRequest>('foundItems', () => getFoundItems(category, query));
};
