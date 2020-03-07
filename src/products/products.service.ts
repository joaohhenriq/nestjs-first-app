import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = []

    insertProduct(title: string, desc: string, price: number) {
        const prodId = new Date().toString()
        const newProduct = new Product(prodId, title, desc, price)

        this.products.push(newProduct)

        return prodId
    }

    getAllProducts() {
        // it's better to have a new object than get the pointer to products
        // and we create this new array using spread operation
        return [...this.products]
    }
}