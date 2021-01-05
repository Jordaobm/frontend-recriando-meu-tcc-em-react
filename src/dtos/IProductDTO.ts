import { string } from "yup"

export default interface IProductDTO {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
    measure: string;
    category_id:string;
    category: {
        id: string;
        name:string;

    }
}