import React, { useState } from 'react'
import Data from './components/Data';
import Tours from "./components/Tours";

function App() {
  const[tours,setTours] = useState(Data)
  function removeTour (id){
  const newTour = tours.filter(tour=>tour.id!==id);
  setTours(newTour)
  }
  if(tours.length===0){
    return(
      <div className='w-100vh h-100vh flex flex-col justify-center items-center'>
        <h1>No tours Left</h1>
        <button onClick={()=>setTours(Data)} className='border border-red-100 px-3 mt-3 rounded'>Refresh</button>
      </div>
    )
  }
  return (
    <div className='w-5/6 container mx-auto'>
      <div>
          <h1 className = "text-3xl text-red-400 text-center">Plan with Abhishek</h1>
      </div>
      <div>
        <Tours tours = {tours} removeTour = {removeTour}/>
      </div>
       
    </div>

  );
}

export default App;
