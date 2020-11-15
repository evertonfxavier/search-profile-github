import React, { useState } from "react";
import Form from "../homework/Form";
import GithubInfo from "../homework/Propzao";

import { HomeWorkWrapper } from "./styles";

const HomeWork = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <HomeWorkWrapper>
      <Form onSubmit={addNewCard} />
      <GithubInfo cards={cards} />
    </HomeWorkWrapper>
  );
};

export default HomeWork;
