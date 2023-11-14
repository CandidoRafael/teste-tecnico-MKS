import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/productsService'

export const useProducts = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    return { data, isLoading, error }
}