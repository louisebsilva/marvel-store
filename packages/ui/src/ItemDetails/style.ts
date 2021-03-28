import styled from 'styled-components';

export const NoInfoWrapper = styled.p`
  width: 100%;
  text-align:center;
  font-family: 'Bangers', cursive;
  margin-top: 5%;
  font-size: 1.8rem;
`;

export const ArticleWrapper = styled.article`
  margin: 2%;
  display: flex;
  flex-wrap: nowrap;
  min-height: 30vh;
  max-height: 50vh;
  background-color: #543864;
  letter-spacing: 2px;

  img {
    width: 20%;
    height: auto;
    margin-right: 5%;
  }
`;

export const ContentWrapper = styled.div`
  margin: 2% 2% 2% 0;

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 4%;
  }

  span {
    font-weight: bold;
  }

  button {
    margin-top: 3%;
    font-family: 'Bangers', cursive;
    font-size: 1.4rem;

    transition: ease all 0.3s;
  }

  button:hover {
    background-color: #ff6363;
    transition: ease all 0.3s;
  }
`;

export const ItemsTypeWrapper = styled.p`
  font-weight: bold;

  span {
    font-weight: normal;
    cursor: pointer;

    transition: ease all 0.3s;
  }

  span:hover {
    color: #151515;
    transition: ease all 0.3s;
  }
`;
