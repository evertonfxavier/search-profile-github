import React, { useState } from "react";
import axios from "axios";

import { SearchWrapper, InputWrapper, ButtonWrapper } from "./styles";

const Form = (props) => {
  const [username, setUsername] = useState("");

  const PegarPerfil = (e) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmiz(resp.data);
      setUsername("");
    });
  };

  return (
    <SearchWrapper onSubmit={PegarPerfil}>
      <InputWrapper
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <ButtonWrapper type="submit">Search Profile</ButtonWrapper>
    </SearchWrapper>
  );
};

export default Form;
