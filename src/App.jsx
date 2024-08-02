import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  const [title, setTitle] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = (getTitle, getCredit, getPrice) =>{

    if(!title.includes(getTitle)){

      if(credit+getCredit <= 20){
        const newTitle = [...title, getTitle]
        setTitle(newTitle);

        const newCredit = credit + getCredit;
        setCredit(newCredit);

        const newPrice = price + getPrice;
        setPrice(newPrice);
      }
      else{
        alert("Got no credit left bro 😢");
      }
    }
    else{
      alert("It's already there bro 😒");
    }
  }

  return (
      <div className='w-11/12 mx-auto'>
        <Header></Header>
        <div className='md:flex gap-5'>
            <Courses handleSelect={handleSelect}></Courses>
            <Sidebar title={title} credit={credit} price={price}></Sidebar>
        </div>
      </div>
  )
}

export default App
