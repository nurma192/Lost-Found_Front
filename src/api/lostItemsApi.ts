import { useQuery } from 'react-query';
import {Item} from "../types/itemTypes";

interface LostItemsRequest {
    lostItems: Item[],
    page: number;
    totalItems: number;
    totalPages: number;
}

export const getLostItems = async (): Promise<LostItemsRequest> => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/lost?query=&page&category`);

    if (!response.ok) {
        throw new Error('Failed to fetch getLostItems');
    }

    return response.json();
};

export const useLostItems = () => {
    return useQuery<LostItemsRequest>('lostItems', () => getLostItems());
};
