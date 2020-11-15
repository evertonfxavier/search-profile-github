import React from "react";

import { GithubSection, ImgWrapper, Hdois, Hquatro } from "./styles";

const GithubInfo = ({ cards }) => (
  <div>
    {cards.map((c) => (
      <GithubSection>
        <ImgWrapper alt="avatar" src={c.avatar_url} />
        <div>
          <Hdois>Login: {c.login}</Hdois>
          <Hdois>Name: {c.name}</Hdois>
          <Hquatro>Bio: {c.bio}</Hquatro>
          <Hquatro>Location: {c.location}</Hquatro>
        </div>
      </GithubSection>
    ))}
  </div>
);

export default GithubInfo;
