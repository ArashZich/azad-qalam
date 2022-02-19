import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  text-align: end;
  box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.5);
`;

const ImageLogo = styled.img`
  display: inline-block;
  padding: 9px 14px;
  margin-right: 10px;
  width: 60px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <ImageLogo src="/images/azadqalam-logo.svg" />
      </Link>
    </Wrapper>
  );
};
export default Header;
