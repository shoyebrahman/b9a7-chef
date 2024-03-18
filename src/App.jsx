
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Blogs from './component/Blogs/Blogs'
import Blogscart from './component/Blogscart/Blogscart'

import Nav from './component/Navbar/Nav'
import Recipes from './component/Recipes/Recipes'
import CookingCart from './component/CookingCart/CookingCart'
import { data } from 'autoprefixer'
//import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect( () =>{
    fetch('food.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
//   const showMsg=()=>{
//     toast( "⚠️ Already Exist") 
//   };
//   const showMsg1=()=>{
//     toast("✅ Added successfully") 
//   };
  
//   const showMsg3=()=>{
//     toast("Now Cooking") 
//   };
  
// const [carts, setCarts]=useState([]);
// const handleCart=(recipy)=>{
//   const isAdded=carts.find(cart=>cart.id===recipy.id);
//   if (isAdded){
//     return showMsg();
//   }
//   else{
//     setCarts([...carts,recipy]);
//     showMsg1();
//   }
// }
const [bookmarks, setBookmarks] = useState([]);
const handleAddToBookmarks = blogs =>{
  console.log('handle add soon');
}
 

  return (
    <>
      
      
     <Nav></Nav>
     <div className='rounded-lg p-5'>
        <Banner></Banner>
     </div>
     <div className='items-center justify-center'>
     <Recipes></Recipes>
     </div>
     <div className='md:flex  '> 
      <div className='lg:w-2/3'>
       <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
       <Blogs></Blogs>
       
      </div>
     <div className='lg:w-1/3'>
     <Blogscart></Blogscart>
    <CookingCart></CookingCart>
     </div>
        <div>

        </div>
     </div>
     
      
    </>
  )
}

export default App
