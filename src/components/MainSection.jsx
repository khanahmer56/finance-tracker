import React from "react";
import styled from "styled-components";
import { currencyFormatter } from "../constants/constants";

const SectionContainer = styled.div`
  color: white;
  padding: 10px;
`;

const BalanceText = styled.p`
  color: lightgray;
`;

const BalanceAmount = styled.h1`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "lightblue"};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const MainSection = () => {
  return (
    <SectionContainer>
      <BalanceText>My Balance</BalanceText>
      <BalanceAmount>{currencyFormatter(335644)}</BalanceAmount>
      <ButtonContainer>
        <Button bgColor="lightblue">Expense</Button>
        <Button bgColor="lightgreen">Income</Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default MainSection;