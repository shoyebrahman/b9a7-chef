//import { useEffect } from "react";
//import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({blogs,  handleAddToBookmarks}) => {
//     console.log(blogs);
    

    return (
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4">
         
            
            {
               
                blogs.map(blogs => <Blog key={blogs.id} handleAddToBookmarks={handleAddToBookmarks} blog={blogs}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;