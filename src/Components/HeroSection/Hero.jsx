import React, { useState } from "react";
import HomeCar from "../Car/HomeCar";
import "./hero.css";
import audi from "../../assetes/car.png";
import toyota from "../../assetes/toyota.png";
import bmw from "../../assetes/AC_Schn-removebg-preview.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const Hero = () => {
  const [number, setNumber] = useState(0);
  const listCar = [
    <HomeCar image={audi} text="Audi"/>,
    <HomeCar image={toyota} text="toyota"/>,
    <HomeCar image={bmw} text="Bmw"/>,
  ];
  const up = () => {
    if(number === 0 || number < 2){
       setNumber((number) => number + 1)
    }
  }
  const down = () => {
    if(number === 2 || number > 0){
       setNumber((number) => number - 1)
    }
  }
  return (
    <div className="hero">
      <div className="container">{listCar[number]}</div>
      <div className="container">
        <div className="buttons">
              <div className={`${number === 0 ? 'active' : null}`} onClick={() => setNumber(0)}></div>
              <div className={`${number === 1 ? 'active' : null}`} onClick={() => setNumber(1)}></div>
              <div className={`${number === 2 ? 'active' : null}`}  onClick={() => setNumber(2)}></div>
        </div>
        <div className="list_flesh">
          <FaChevronLeft className={number === 0 ? 'flesh disabled' : 'flesh'} onClick={()=> down()}/>
          <FaChevronRight className={number === 2 ? 'flesh disabled' : 'flesh'}  onClick={()=> up()} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
