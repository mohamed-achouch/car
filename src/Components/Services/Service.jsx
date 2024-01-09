import React from "react";
import "./service.css";
import SubTitle from "../SubTitle";
import rec_car from "../../assetes/Rec.png";
import Button from "../Button";
const Service = () => {
  const listBox = [
    {
      id: 1,
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M25.85 4.71667H14.15C9.99996 4.71667 9.08329 6.78334 8.54996 9.31668L6.66663 18.3333H33.3333L31.45 9.31668C30.9166 6.78334 30 4.71667 25.85 4.71667Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.65 33.0334C36.8334 34.9834 35.2667 36.6667 33.2667 36.6667H30.1334C28.3334 36.6667 28.0834 35.9 27.7667 34.95L27.4334 33.95C26.9667 32.5834 26.6667 31.6667 24.2667 31.6667H15.7334C13.3334 31.6667 12.9834 32.7 12.5667 33.95L12.2334 34.95C11.9167 35.9 11.6667 36.6667 9.86672 36.6667H6.73338C4.73338 36.6667 3.16672 34.9834 3.35005 33.0334L4.28338 22.8834C4.51672 20.3834 5.00005 18.3334 9.36672 18.3334H30.6334C35 18.3334 35.4834 20.3834 35.7167 22.8834L36.65 33.0334Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66667 13.3334H5"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M35 13.3334H33.3334"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 5V8.33333"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 8.33337H22.5"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 25H15"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 25H30"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      des: "we Provide many of the best servises for you  and you will get the best benefits here",
      title: "Top Buy & sell Car",
    },
    {
      id: 2,
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M36.6666 20V28.3333C36.6666 33.3333 33.3333 36.6666 28.3333 36.6666H11.6666C6.66659 36.6666 3.33325 33.3333 3.33325 28.3333V20C3.33325 15.4666 6.06659 12.3 10.3166 11.7666C10.7499 11.7 11.1999 11.6666 11.6666 11.6666H28.3333C28.7666 11.6666 29.1833 11.6833 29.5833 11.7499C33.8833 12.2499 36.6666 15.4333 36.6666 20Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29.5858 11.75C29.1858 11.6834 28.7691 11.6667 28.3358 11.6667H11.6691C11.2024 11.6667 10.7524 11.7001 10.3191 11.7667C10.5524 11.3001 10.8858 10.8667 11.2858 10.4667L16.7024 5.03337C18.9858 2.76671 22.6858 2.76671 24.9691 5.03337L27.8858 7.98341C28.9524 9.03341 29.5191 10.3667 29.5858 11.75Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.6666 20.8334H31.6666C29.8333 20.8334 28.3333 22.3334 28.3333 24.1667C28.3333 26 29.8333 27.5 31.6666 27.5H36.6666"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      des: "we Provide many of the best servises for you  and you will get the best benefits here ",
      title: "Easy payment",
    },
    {
      id: 3,
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M28.1667 36.6667H11.8334C9.00009 36.6667 6.66675 34.35 6.66675 31.5V8.50005C6.66675 5.66672 8.98342 3.33337 11.8334 3.33337H28.1667C31.0001 3.33337 33.3334 5.65005 33.3334 8.50005V31.5C33.3334 34.35 31.0167 36.6667 28.1667 36.6667Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.8334 21.6667H9.16675C7.78341 21.6667 6.66675 20.55 6.66675 19.1667V15.8334C6.66675 14.45 7.78341 13.3334 9.16675 13.3334H30.8334C32.2167 13.3334 33.3334 14.45 33.3334 15.8334V19.1667C33.3334 20.55 32.2167 21.6667 30.8334 21.6667Z"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1574 29.5001H14.1724"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.8242 29.5001H25.8391"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8333 8.33337H24.1666"
            stroke="#A2001D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      des: "we Provide many of the best servises for you  and you will get the best benefits here",
      title: "Easy to use",
    },
  ];
  return (
    <div className="service" id="service">
      <div className="container">
        <SubTitle content="Our Services" />
        <p className="parag">
          we Provide many of the best servises for you and you will get the best
          benefits here{" "}
        </p>
        <div className="list_box">
          {listBox.map((item) => (
            <div key={item.id} className="box">
              {item.logo}
              <h2 className="title">{item.title}</h2>
              <p className="desc">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <img src={rec_car} alt="" />
        <div className="info">
          <div>
          <h1>EVs For Everyone</h1>
          <p>
            we Provide many of the best servises for you and you will get the
            best benefits here
          </p>
          <Button content="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
