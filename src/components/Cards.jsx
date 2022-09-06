import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Explore the hidden waterfalls of the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Discover the mysteries of the ocean when you scuba dive in South Africa "
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Brave the slopes when you go on this trilling ski trip in Austria"
              label="Thrill Seekers"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Discover new and unique places when you vacation in Istanbul"
              label="Discovery"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Enjoy the scenery when you spend a week in Bora Bora"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
