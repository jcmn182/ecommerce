import {useState,useEffect} from 'react';

export const useGetData = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

      const fetchData = async () => {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const result = await response.json();
        setData(result)
      }
      fetchData()
      return () => {
        setData('')
      }
         }, [])  


    return {data,loading}
}