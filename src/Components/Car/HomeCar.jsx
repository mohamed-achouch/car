import Button from "../Button";
import "./car.css";
const HomeCar = ({ image,text }) => {
  return (
    <div className="cars">
      <div className="text">      
          <span>{text}</span>
      </div>
      <div className="dream">
        <h2>find your dream</h2>
        <div className="find_dream">
          <h1>Car</h1>
          <Button content="Order Now" />
        </div>{" "}
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default HomeCar;
