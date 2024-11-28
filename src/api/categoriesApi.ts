import {useQuery} from "react-query";
import {Categories} from "../types/categories";

export const getCategories = async (): Promise<Categories[]> => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories`);

    if (!response.ok) {
        throw new Error('Failed to fetch Categories data');
    }

    return response.json();
}

export const useCategoriesData = () => {
    return useQuery<Categories[]>('categories', getCategories);
};
