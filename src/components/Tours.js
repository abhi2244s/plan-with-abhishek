import React from 'react'
import Cards from './Cards'

const Tours = ({tours,removeTour}) => {
  return (
    <div className='grid md:grid-cols-3 gap-10 grid-cols-2 mt-8'>
        {
            tours.map((tour)=>{
                return <Cards {...tour} removeTour = {removeTour}/>
            })
        }
    </div>
  )
}

export default Tours