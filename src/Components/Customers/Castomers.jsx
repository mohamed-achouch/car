import React, { useRef, useState,useEffect } from "react";
import "./castomers.css";
import SubTitle from "../SubTitle";
import cast1 from "../../assetes/cast1.png";
import cast2 from "../../assetes/cast2.png";
import cast3 from "../../assetes/cast3.png";
import { motion } from "framer-motion";
const Castomers = () => {
  const [width,setWidth] = useState(0);
  const carousel = useRef();
 
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const list_customers = [
    {
      id: 1,
      image: cast1,
      name: "Órlaith Parastu",
      title: "Bought Tesla Model 3",
      desc: "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
    },
    {
      id: 2,
      image: cast2,
      name: "Melina Nesterenko ",
      title: "Bought Tesla Model 3  for $85,000",
      desc: "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
    },
    {
      id: 3,
      image: cast3,
      name: "Eve Artie",
      title: "Bought Tesla Model 3  for $85,000",
      desc: "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
    },
    {
      id: 4,
      image: cast3,
      name: "Eve Artie",
      title: "Bought Tesla Model 3  for $85,000",
      desc: "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
    },
    {
      id: 5,
      image: cast3,
      name: "Eve Artie",
      title: "Bought Tesla Model 3  for $85,000",
      desc: "The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.",
    },
  ];
  return (
    <div className="castomers" id="castomers">
      <div className="container">
        <SubTitle content="Our Coustomer feedback" />
       <motion.div className="carousel" ref={carousel}>
        <motion.div className="list_castomers"  drag="x"
            dragConstraints={{ right: 0, left: -width }}>        
          {list_customers.map((item) => (
            <div key={item.id} className="castomer">
              <div className="castomer_info">
                <img src={item.image} alt="" />
                <div className="info_cast">
                  <span className="name">{item.name}</span>
                  <span className="title">{item.title}</span>
                </div>
              </div>
              <div className="description">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
       
        </motion.div>
        </motion.div>       
      </div>
    </div>
  );
};

export default Castomers;
