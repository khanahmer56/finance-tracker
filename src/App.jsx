import React, { useRef } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ExpenceComponent from "./components/ExpenceComponent";
import ChartComponent from "./components/ChartComponent";
import CoustomModal from "./components/CoustomModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dummydata = [
    { id: 1, title: "Entertainment", color: "#000", amount: 500 },
    { id: 2, title: "fuel", color: "#009", amount: 400 },
    { id: 3, title: "grocery", color: "#000", amount: 700 },
    { id: 4, title: "abc", color: "#000", amount: 200 },
    { id: 5, title: "xyz", color: "#000", amount: 300 },
  ];
  return (
    <Container>
      <Header />
      <MainSection openModal={openModal} />
      <ExpenceComponent />
      <ChartComponent dummydata={dummydata} />
      <CoustomModal
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        Ahmer
      </CoustomModal>
    </Container>
  );
};

export default App;
