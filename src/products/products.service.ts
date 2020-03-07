import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = []

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString()
        const newProduct = new Product(prodId, title, desc, price)

        this.products.push(newProduct)

        return prodId
    }

    getAllProducts() {
        // it's better to have a new object than get the pointer to products
        // and we create this new array using spread operation
        return [...this.products]
    }

    getProduct(productId: string) {
        const product = this.products.find((prod) => prod.id === productId)

        if (!product) {
            throw new NotFoundException('Could not find the product')
        }

        return { ...product }
    }
}