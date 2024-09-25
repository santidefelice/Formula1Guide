import React from 'react';
import './App.css';

const F1TeamCard = ({ name, nation, imageUrl, menuLink }) => (
  <div className="food-truck-card">
    <img src={imageUrl} alt={name} className="food-truck-image" />
    <div className="food-truck-info">
      <h3 className="food-truck-name">{name}</h3>
      <p className="food-truck-cuisine">{nation}</p>
      <a href={menuLink} className="view-menu-button">
        Learn More
      </a>
    </div>
  </div>
);

const FoodTruckFavorites = () => (
  <div className="food-truck-favorites">
    <div className="container">
      <div className="awning"></div>
      <div className="content">
        <h2 className="title">Guide to Formula One Teams</h2>
        <div className="food-truck-grid">
          <F1TeamCard
            name="Mercedes AMG Petronas"
            nation="German"
            imageUrl="public/mercedes.png"
            menuLink="https://www.mercedesamgf1.com/"
          />
          <F1TeamCard
            name="Mclaren"
            nation="British"
            imageUrl="public/mclaren.avif"
            menuLink="https://www.mclaren.com/"
          />
          <F1TeamCard
            name="RedBull Racing"
            nation="British"
            imageUrl="public/rb.png"
            menuLink="https://www.redbullracing.com/int-en"
          />
          <F1TeamCard
            name="HAAS F1 Team"
            nation="American"
            imageUrl="public/haas.png"
            menuLink="https://www.haasf1team.com/"
          />
          <F1TeamCard
            name="Alpine F1 Team"
            nation="French"
            imageUrl="public/alpine.avif"
            menuLink="https://www.alpine-cars.co.uk/formula-1/f1-team.html"
          />
          <F1TeamCard
            name="Aston Martin F1 Team"
            nation="British"
            imageUrl="public/Aston-Martin-Formula-One-Team-Logo.jpg"
            menuLink="https://www.astonmartinf1.com/en-GB/"
          />
          <F1TeamCard
            name="Williams F1 Team"
            nation="British"
            imageUrl="public/williams.png"
            menuLink="https://www.williamsf1.com/?srsltid=AfmBOopsHl66gv7aSBaXU6XT5tkMdrCAZZzs3jbJEx3ax5eI83fnUU2P/"
          />
          <F1TeamCard
            name="Scuderria Ferrari"
            nation="Italian"
            imageUrl="public/ferrrari.webp"
            menuLink="https://www.ferrari.com/en-EN/formula1"
          />
          <F1TeamCard
            name="Visa Cashapp RB"
            nation="British"
            imageUrl="public/visarb.jpeg"
            menuLink="https://www.visacashapprb.com/en/"
          />
          <F1TeamCard
            name="Kick Sauber"
            nation="German"
            imageUrl="public/sauber.png"
            menuLink="https://www.sauber-group.com/"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FoodTruckFavorites;


