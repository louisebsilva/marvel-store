import styled from 'styled-components';

export const CardWrapper = styled.article`
  background-color: #ff6363;
  width: 30%;
  text-align: center;
  margin-bottom: 2%;
  cursor: pointer;
  border-radius: 2%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 90%;
  }

  h3 {
    height: 10%;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
