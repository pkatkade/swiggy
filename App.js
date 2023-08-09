import './App.css';
import { useState } from 'react';
import {Burgerking }from './Body'






  const SearchBox = (restt , setRestt) =>{


    function filterData(searchText, rest) {
      console.log("inside", rest)
      const filterData = restt.filter((resto)=>
      resto.data.data.name.includes(searchText)
      )
      return filterData
    }

    const [searchText , setSearchText] = useState("")

    
 

    return(
      <>
      <input 
        type='text' 
        placeholder='search'
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)
        }
      /> 
      <button className='button' onClick={()=>{
         const data= filterData (searchText,restt)
         setRestt(data)}}> 
         search  </button></>
    )
  }
  

const RestrauntCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId}) =>{
  return(
    <div className='card'>
      <img alt = "asd0" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}></img>
      <h2 className='name'>{name}</h2>
      <h3>{cuisines}</h3>
      <h3>{lastMileTravelString}</h3>

    </div>
  )
}

function App() {
  
  const [restt, setRestt] = useState(Burgerking)

  return (
    <div className='header'>
      
    <div className="nav-item">
    
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>cart</li>
      </ul>
      <SearchBox className='search_box'></SearchBox>
      <div className='res'>
      {
        restt.map((resto)=>{
          return <RestrauntCard {...resto.data.data} key={resto.data.data.id}/>
        })
      }
      
      
      
      </div>
    </div>
    </div>
  );
}





export default App;
