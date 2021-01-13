import React from "react";
import Card from "./components/card/Card";
import Maker from "./components/maker/Maker";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Maker />
      <Card />
    </Wrapper>
  );
}

export default App;
