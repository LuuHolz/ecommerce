import { useEffect } from 'react';
import useProducts from '../hooks/useProducts'


const Home = () => {
 const {isLoading, products,error, getProducts} = useProducts();

  useEffect(() => {
     getProducts()
  }, []);


  return (
    <div>
      <p>hola</p>
    </div>
  )
}

export default Home
