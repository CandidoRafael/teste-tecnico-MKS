export type Product = {
    id: number
    name: string
    brand: string
    description: string
    price: number
    photo: string,
    quantity: number
}

export type Products = {
    count: number
    products: Product[]
}