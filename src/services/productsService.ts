import axios from "axios"
import { Products } from "../types/Product"

const url = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=DESC'

export const getProducts = async () => {
    const response = await axios.get<Products>(url)
    return response.data
}