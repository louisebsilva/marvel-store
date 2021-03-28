import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5% 5% 5%;

  p {
    width: 100%;
    text-align:center;
    font-family: 'Bangers', cursive;
    margin-top: 5%;
    font-size: 1.8rem;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-family: 'Bangers', cursive;
    font-size: 2rem;
    margin-top: 5%;
    margin-bottom: 2%;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
