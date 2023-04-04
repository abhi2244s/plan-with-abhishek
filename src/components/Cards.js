import React, { useState } from 'react'

const Cards = ({id,name,info,price,image,removeTour}) => {
    const [readmore,setReadmore] = useState(false)
    const description = readmore ? info : `${info.substr(0,200)}....`
  return (
    <div className='border border-red-500'>
        <div>
            <img src={image}/>
        </div>
       <div className='p-3'>
       <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
        </div>
        <div>
            {description}
            <span onClick={()=>setReadmore(!readmore)}>
                {
                    readmore ? `showless` : `readmore`
                }
            </span>
        </div>
        <div>
            <button onClick={()=>removeTour(id)} className='border border-teal-100 text-red-500 px-3 py-2'>Not Interested</button>
        </div>

       </div>
    </div>
  )
}

export default Cards