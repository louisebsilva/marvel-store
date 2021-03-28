import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: #151515;
  padding: 1% 0;
`;

export const Title = styled.h1`
  font-family: 'Bangers', cursive;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  width: 80%;
  margin-left: 10%;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: ease all 0.5s;
  }

  svg:hover {
    fill: #ff6363;
    transition: ease all 0.5s;
  }
`;
