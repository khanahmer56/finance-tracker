import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";

const ExpenceContainer = styled.div`
  padding: 10px;
`;

const Title = styled.h4`
  color: white;
  font-size: 20px;
  font-family: sans-serif;
`;

const ExpenceComponent = () => {
  return (
    <ExpenceContainer>
      <Title>My Expenses</Title>
      <ListCard />
    </ExpenceContainer>
  );
};

export default ExpenceComponent;
