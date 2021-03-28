import styled from 'styled-components';

export const NoInfoWrapper = styled.p`
  width: 100%;
  text-align:center;
  font-family: 'Bangers', cursive;
  margin-top: 5%;
  font-size: 1.8rem;
`;

export const CardListWrapper = styled.section`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    width: 30%;
    content: '';
  }

  p {
    width: 100%;
    text-align:center;
    font-family: 'Bangers', cursive;
    margin-top: 5%;
    font-size: 1.8rem;
  }
`;
