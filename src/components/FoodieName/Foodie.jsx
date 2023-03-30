import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";

const Foodie = ({ foodieName }) => {
  const [selectFoodie, setSelectFoodie] = useState([]);

  const foodieFirstIndex = foodieName
    .slice(1)
    .reduce((acc, currentFoodie) => currentFoodie, foodieName[0]);

  useEffect(() => {
    const foodie = foodieName.reduce((acc, currentFoodie) => currentFoodie, {});

    const isIncluDed = (foodie) => {
      return selectFoodie.some((fod) => fod.idMeal === foodie.idMeal);
    };
    if (!isIncluDed(foodie)) {
      if (foodieFirstIndex) {
        const addFoodie = [...selectFoodie, foodie];
        setSelectFoodie(addFoodie);
      }
    } else return;
  }, [foodieName]);

  return (
    <div>
      <ul className="flex flex-col space-y-10">
        {selectFoodie.map((selectedFood) => (
          <li
            key={selectFoodie.idMeal}
            className="list-disc py-5  text-orange-500 bg-white shadow-lg w-full px-4"
          >
            <div className="flex items-center space-x-5 text-xl font-bold">
              <span>{selectedFood.strMeal}</span>
              <FontAwesomeIcon icon={faCheckToSlot} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foodie;
