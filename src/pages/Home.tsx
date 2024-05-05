import { useEffect } from 'react';
import useProducts from '../hooks/useProducts'
import Card from '../components/Card.tsx';


const Home = () => {
 const {isLoading, products,error, getProducts} = useProducts();

  useEffect(() => {
     getProducts()
  }, []);


  return (
    <div className='containerHome'>
      {
        products.length > 0 && products.map((product, index) => (
          <Card key={index} product={product} isLoading={isLoading}/>
        ))
      }
      
    </div>
  )
}

export default Home
