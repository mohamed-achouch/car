import React, { useEffect, useRef, useState } from "react";
import SubTitle from "../SubTitle";
import list_brnads from "../../data/brands";
import { motion } from "framer-motion";
import "./brands.css";
const Brands = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="brand" id="brand">
      <SubTitle content="Brands" />
      <div className="container">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: - width }}
          className="carousel" ref={carousel}
        >
          <motion.div className="list_brands">
            {list_brnads.map((item, index) => (
              <div className="brand" key={index}>
                {
                  <>
                    {item.image}
                    {item.title}
                  </>
                }
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
