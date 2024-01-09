import SubTitle from "../SubTitle";
import "./blogs.css";
import blog1 from "../../assetes/blog1.png";
import blog2 from "../../assetes/blog2.png";
import blog3 from "../../assetes/blo3.png";
const Blogs = () => {
  const list_blogs = [
    {
      id: 1,
      image: blog1,
      desc: "Is the 2024 Porsche Cayenne S a Good SUV? 4 Pros and 3 Cons",
    },
    {
      id: 2,
      image: blog2,
      desc: "Compact Steamroller: 2024 Toyota RAV4 Starts at $29,825",
    },
    {
      id: 3,
      image: blog3,
      desc: "2024 Kia Niro EV Costs $50 More, Nearly Unchanged Otherwise",
    },
  ];
  return (
    <div className="blogs" id="blog">
      <div className="container">
        <SubTitle content="Blogs" />
        <div className="list_blogs">
          {list_blogs.map((item) => (
            <div key={item.id} className="blog">
              <img src={item.image} alt="" />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
