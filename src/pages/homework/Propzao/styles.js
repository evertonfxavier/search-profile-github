import styled from "styled-components";

const GithubSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImgWrapper = styled.img`
  padding: 0 10px;
  max-width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
`;

const Hdois = styled.h2`
  padding: 10px 0;
`;

const Hquatro = styled.h4`
  padding: 10px 0;
`;

export { GithubSection, ImgWrapper, Hdois, Hquatro };
