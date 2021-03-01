import React, { useState } from "react";
import Form from "../homework/Form";
import GithubInfo from "../homework/Propzao";

import { HomeWorkWrapper } from "./styles";

const HomeWork = () => {
  const [card, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(card.concat(cardInfo));
  };

  return (
    <HomeWorkWrapper>
      <Form onSubmiz={addNewCard} />
      <GithubInfo cards={card} />
    </HomeWorkWrapper>
  );
};

export default HomeWork;
