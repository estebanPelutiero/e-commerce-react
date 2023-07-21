import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import Card from '../Components/Card'

const Home = () => {

  const [items, setItems] = useState(null)

  const fetchProducts = async () => {
    const result = await fetch('https://fakestoreapi.com/products')
    const data = await result.json()
    console.log(data)
    setItems(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Layout>
      Home

      <div className='grid grid-cols-4 gap-3'>

        {
          items?.map((item) => (
            <Card 
            key={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
            category={item.category} />
          ))
        } 

      </div>

    </Layout>
  )
}

export default Home