export interface Item {
    "_id": string;
    "name": string;
    "images": string[];
    "user": string;
    "category": {
        "_id": string;
        "name": string;
        "__v": number
    },
    "createdAt": string;
    "updatedAt": string;
    "__v": number
}