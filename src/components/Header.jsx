import React from "react";
import styled from "styled-components";
import { IoIosStats } from "react-icons/io";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black; /* Added background color to make white text visible */
  padding: 10px; /* Optional padding for better spacing */
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* Fixed gap syntax */
  color: white; /* Ensure the text color is applied */
`;

const UserLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Greeting = styled.p`
  margin-left: 10px;
  color: white; /* Ensure the text color is applied */
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <UserLogo
          src="https://cdn-icons-png.freepik.com/512/700/700674.png"
          alt="user-logo"
        />
        <Greeting>Hii Ahmer</Greeting>
      </HeaderContainer>
      <HeaderContainer>
        <IoIosStats size={30} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
