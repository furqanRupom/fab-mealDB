import React, { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';
import Foodie from '../FoodieName/Foodie';

const Content = () => {
    const [foodie,setFoodie] = useState([]);
    const [foodieName, setFoodieName] = useState([]);
    useEffect(()=>{
        const loadFoodie = async ()=>{
            const res =  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            const data = await res.json()
            setFoodie(data.meals)
        }
        loadFoodie();
    },[])
    const handledFoodie = (food)=>{
        const newFoodie = [...foodieName,food]
        setFoodieName(newFoodie);
    }
    return (
        <main className="my-20">
            <h1 className="text-center text-2xl font-semibold text-orange-500">
                this delicious is waiting for You to fill your belly
            </h1>

            <section className="grid grid-cols-[4fr,1fr] gap-10">
                <div className="grid grid-cols-3 gap-10">
                    {
                        foodie.map(food => <Display
                             food={food}
                            key={food.idMeal}
                            handledFoodie={handledFoodie} />)
                    }
                </div>

                <div>
                    <h1 className="text-2xl text-center text-orange-500 font-bold">
                        selected foodie are here
                    </h1>
                    <div>
                        <Foodie foodieName = {foodieName} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Content;
