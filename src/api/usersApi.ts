import { useQuery } from 'react-query';

export const getUserData = async (token: string) => {
    if (!token) {
        return
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    return response.json();
};

export const useUserData = (token: string) => {
    return useQuery('userData', () => getUserData(token), {
        enabled: !!token,
    });
};
