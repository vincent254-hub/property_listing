import {useState, useEffect} from 'react'
import axios from 'axios';
import { getProducts } from '../apiCalls';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)


    
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(getProducts);
            setData(response.data.products)            
            setIsLoading(false)
        } catch (error) {
            setError(true) 
            setIsLoading(false)                      
        } 
    }

    useEffect(() => {
        fetchData();
        
    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }
  return {data, isLoading, error, refetch}
}

export default useFetch