import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Display = ({food,handledFoodie}) => {
    console.log(food)
    const {strMeal,strMealThumb,strCategory,strYoutube} = food
    return (
        <div className="shadow-md p-5 rounded-lg relative">
            <h1 className="text-xl py-4 font-bold"> {strMeal}</h1>
            <img src={strMealThumb} alt="" />
            <p>category : {strCategory}</p>
            <p className="pt-3 pb-8">details More : <a href={strYoutube}>{strYoutube}</a></p>
            <button onClick={()=> handledFoodie(food)} className="px-7 absolute bottom-0 left-0 w-full py-3 font-semibold rounded bg-orange-500 hover:bg-orange-400 text-white">Add to Meal

            <span className="pl-5"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>

        </div>
    );
}

export default Display;
