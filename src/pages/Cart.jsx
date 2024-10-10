import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

const Cart = () => {

   const {cart} = useSelector((state) => state);
   const [totalAmount, setTotalAmount] = useState(0);
   
   useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0));
   }, [cart])

  return (
    <div className='flex flex-col justify-center items-center w-full px-2'>  {/* Changed to flex-col and added responsive width */}
        {
            cart.length > 0 ?
            (<div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center mt-10'>  {/* Responsive flex for different screen sizes */}
              
              <div className='w-full lg:w-1/2'> {/* Make the cart items section full-width on smaller screens */}
              {
                cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
              </div>

            <div className='flex flex-col items-start w-full lg:w-1/3 p-4 border border-gray-200 rounded-md'>  {/* Wrapped summary in a responsive box */}
               <div className='mb-4'>
                  <div className='text-green-600 font-semibold'>Your Cart</div>
                  <div className='text-green-600 text-[20px] uppercase font-bold'>Summary</div>
                  <p>
                    <span className='font-semibold'>Total Items: {cart.length}</span>
                  </p>
               </div>

               <div className='mt-4'>
                <p className='font-semibold mb-1 text-[13px]'>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
                <button className='w-full lg:w-[200px] h-[40px] text-[15px] rounded-lg text-white font-bold bg-green-600 hover:bg-green-700 transition-all'>
                    CheckOut Now
                </button>
               </div>
            </div>

            </div>) :
            (<div className='flex flex-col gap-2 items-center mt-[35vh] px-4 text-center'> {/* Center content with padding */}
               <h1 className='font-semibold text-[20px]'>Cart Empty</h1> 
               <Link to={"/"}>
                  <button className='w-full sm:w-[200px] h-[40px] text-[15px] font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition ease-in'>
                     Shop Now
                  </button>
               </Link>
            </div>)
        }
    </div>
  )
}

export default Cart;

