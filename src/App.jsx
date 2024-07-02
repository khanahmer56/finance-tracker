import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ExpenceComponent from "./components/ExpenceComponent";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const App = () => {
  return (
    <Container>
      <Header />
      <MainSection />
      <ExpenceComponent />
    </Container>
  );
};

export default App;
