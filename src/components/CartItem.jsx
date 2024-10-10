import React from 'react'
import toast from 'react-hot-toast';
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch} from 'react-redux';
import { remove } from '../redux/Slice/CartSlice';

export const CartItem = ({item, itemIndex}) => {

    

    const dispatch = useDispatch();

    const removeFromCart = () => {
         dispatch(remove(item.id));
         toast.error("Item removed");
    }

  return (
    <div className='flex flex-wrap max-w-[450px] border-b border-black mt-6 pb-4'>
        <div className='flex gap-6 flex-wrap '>

        <div className='h-[150px] w-[150px]'>
            <img src={item.image} className='h-full w-full'/>
        </div>


        <div className='flex flex-col w-[250px] '>
            <div className='flex flex-col gap-1'>
               <h1 className='text-gray-700 font-bold text-sn text-left  w-70 mt-1'>{item.title}</h1>
               <h1 className='w-60 text-grey-400 font-normal text-[12px] text-left'>{item.description.split(" ").slice(0, 15).join(" ")+"..."}</h1>

               <div className='flex justify-between items-center'>
                <p className='text-green-600 font-semibold'>${item.price}</p>
                <div onClick={removeFromCart}>
                    
                    <FcDeleteDatabase className='w-4 bg-red-400  rounded-full hover:bg-red-600 transition ease-in'/>
                    
                </div>
            </div>
            </div>



        </div>


        </div>
    </div>
  )
}
