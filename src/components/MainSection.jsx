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

const MainSection = ({ openModal, totalBalance }) => {
  return (
    <SectionContainer>
      <BalanceText>My Balance</BalanceText>
      <BalanceAmount>{currencyFormatter(totalBalance)}</BalanceAmount>
      <ButtonContainer>
        <Button bgColor="lightblue" onClick={() => openModal("expense")}>
          Expense
        </Button>
        <Button bgColor="lightgreen" onClick={() => openModal("income")}>
          Income
        </Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default MainSection;
