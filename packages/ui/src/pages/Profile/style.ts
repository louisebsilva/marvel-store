import styled from 'styled-components';

export const ProfileForm = styled.form`
  margin: 15% auto;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: space-between;
  background-color: #151515;
  padding: 3%;

  h2 {
    font-family: 'Bangers', cursive;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5%;
  }

  div {
    display: flex;
  }

  button {
    width: 40%;
    margin: 2% auto auto auto;
    height: 40px;
    font-family: 'Bangers', cursive;
    font-size: 1.4rem;
    transition: ease all 0.5s;
  }

  button:hover {
    color: white;
    background-color: #ff6363;
    transition: ease all 0.5s;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4%;
  height: 40px;

  label {
    width: 10%;
  }

  input {
    width: 70%;
    height: 80%;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
