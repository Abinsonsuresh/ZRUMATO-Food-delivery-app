import React, { useState } from 'react'
import { data} from '../data/data.js'
const FoodCard = () => {
    const [foods , setFoods] = useState(data);
    const FoodFilter =(Oncategory)=>{
        setFoods(
            data.filter((food)=>{
                return food.category === Oncategory
            })
        )
    } 


    const PriceFilter =(OnPrice)=>{
        setFoods(
            data.filter((food)=>{
                return food.price === OnPrice
            })
        )
    } 
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-bold '>Top Food Items to Try Now!</h1>
        </div>

        <div className='FILTER ROW flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='py-4'>Filter type</p>
                <div className='flex justify-start flex-wrap gap-3'>
                <button onClick={()=> setFoods(data)}>All</button>
                <button onClick={()=> FoodFilter('burger')}>Burgers</button>
                <button onClick={()=> FoodFilter('pizza')}>Pizza</button>
                <button onClick={()=> FoodFilter('salad')}>Salads</button>
                <button onClick={()=> FoodFilter('chicken')}>Chicken</button>
                </div>

            </div>

            <div >
                <p className='py-4'>Filter price</p>
                <div className='flex justify-start flex-wrap gap-3 '>
                <button  onClick={()=> PriceFilter('$')}>$</button>
                <button onClick={()=> PriceFilter('$$')}>$$</button>
                <button onClick={()=> PriceFilter('$$$')}>$$$</button>
                <button onClick={()=> PriceFilter('$$$$')}>$$$$</button>

                </div>

            </div>
        </div>


        {/* DISPLAY FOODS */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
{
    foods.map((food, index)=>(
        <div key={index} className='shadow-xl rounded-xl border'>
            <img className='w-full h-[200px] object-cover rounded-t-xl' src={food.image} alt="" />
            <div className='flex justify-between py-4 px-2'>
                <p>{food.name}</p>
                <p>{food.price}</p>

            </div>
        </div>

    ))
}
        </div>
    </div>
  )
}

export default FoodCard