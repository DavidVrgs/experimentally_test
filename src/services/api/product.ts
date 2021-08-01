import * as types from "../../models";
import { API_CALLER } from "./api_caller";

export class ProductService {

    public async get(path: string): Promise<types.ProductType> {
        return <types.ProductType>API_CALLER.get(path);
    }

}
