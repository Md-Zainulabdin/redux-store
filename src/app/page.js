import React from 'react'
import Products from './components/Products/page'

const Home = () => {
  return (
    <div>
      <div className="title py-8 px-[20px] md:px-[50px]">
        <h1 className='w-full text-3xl font-semibold text-[#222]'>All Products :</h1>
      </div>
      <div className='w-full py-8'>
        <Products />
      </div>
    </div>
  )
}

export default Home