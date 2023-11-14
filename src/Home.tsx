import { HomeProducts } from './Home.styled'
import { useProducts } from './hooks/useProducts'

import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Loading from './components/Loading/Loading'

const Home = () => {

  const { data, isLoading } = useProducts()
  
  return (
    <>
     <Navbar />
     <Sidebar />
     <HomeProducts>
      {isLoading ? (
        <Loading data={data} loading={isLoading} />
        ): data?.products.map((product) => (
         <Card 
          key={product.id}
          product={product}
        />
      ))}
     </HomeProducts>
      <Footer />
    </>
  )
}

export default Home
