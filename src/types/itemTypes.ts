export interface Item {
    "id": string;
    "name": string;
    "images": string[];
    "user": string;
    "category": {
        "id": string;
        "name": string;
    },
    "createdAt": string;
    "updatedAt": string;
}