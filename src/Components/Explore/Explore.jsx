import SubTitle from "../SubTitle";
import "./explore.css";
import list_models from "../../data/models";
import Button from "../Button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Explore = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="explore" id="modles">
      <SubTitle content="Explore" />
      <ul>
        <li>Cars & Minivan</li>
        <li>Trucks</li>
        <li>Crossovers & SUVs</li>
        <li>Electrified</li>
      </ul>
      <div className="container">
        <motion.div className="carousel" ref={carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="list_models"
          >
            {list_models.map((item, index) => (
              <motion.div className="modele" key={index}>
                {
                  <>
                    <img src={item.image} alt="" />
                    <div className="box_model">
                      <h1 className="title">{item.title}</h1>
                      <span className="status">{item.status}</span>
                      <div className="info_car">
                        <div className="car_info">
                          <span>Model year:</span>
                          <span>{item.modele_year}</span>
                        </div>
                        <div className="car_info">
                          <span>Model:</span>
                          <span>{item.model}</span>
                        </div>
                        <div className="car_info">
                          <span>Fuel:</span>
                          <span>{item.Fuel}</span>
                        </div>
                        <p className="price">{item.price}</p>
                        <Button content="Order Now" />
                      </div>
                    </div>
                  </>
                }
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
