import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import { BASE_URL } from "../../App";

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-radius: 20px;
  display: flex;
  padding: 8px;
  border: 1px solid #d2f1d3;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(50px);

  .food_info {
    color: white;
    display: flex;
    font-family: "Inter", sans-serif;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
      font-weight: 300;
    }
    button {
      font-size: 12px;
    }
  }
`;

const HeroCards = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

function NavResult({ data, onItemClick }) {
  console.log("Data in NavResult:", data);
  return (
    <Hero>
      <HeroCards>
        {data.map(({ id, name, image, text, price }) => (
          <FoodCard
            key={id}
            onClick={() => onItemClick({ id, name, image, text, price })}
          >
            <div className="food_image">
              <img src={BASE_URL + image} alt={name} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
                <button>${price.toFixed(2)}</button>
              </div>
            </div>
          </FoodCard>
        ))}
      </HeroCards>
    </Hero>
  );
}

export default NavResult;
