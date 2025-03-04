import React, { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';
import { Navbar } from '../components/Navbar';

export const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    async function fetchProductData() {
        setLoading(true);

        try{
            const response = await fetch(API_URL);
            const data = await response.json();

            setPosts(data);
        }
        catch(error){
            console.log("error");
            setPosts([]);

        }
        setLoading(false);
    }

    useEffect( () => {
         fetchProductData();
    }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='w-full bg-slate-900 '>
      <Navbar/>
      </div>
        {
           loading ? <div className='mt-[35vh] mb-[40vh]'><Spinner/></div> : 
           posts.length > 0 ?
           (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl p-2 mx-auto space-y-10 space-x-5 min-h[80vh]'>
                {
               posts.map( (post) =>( 
                  <Product key={post.id} post={post} />
               ))
            }
            </div>
           ) :
           <div className='flex justify-center items-center'>
            <p className='mt-[35vh] mb-[40vh] text-[20px] font-semibold flex flex-col items-center justify-center'><p>No Data Found</p><p>Check Your Connection</p></p>
           </div>
        }
         <footer className='h-[60px] w-full mt-[30px] bg-slate-900 text-white flex justify-center items-center'>Copyright &copy;: ShivamPatwa</footer>
       
    </div>
  );
};
