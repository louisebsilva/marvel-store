import styled from 'styled-components';

export const LoginForm = styled.form`
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

  label {
    margin-left: 15%;
  }

  input {
    width: 70%;
    margin: 1% 0 4% 15%;
    height: 30px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 71%;
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  margin-left: 15%;

  button {
    width: 48%;
    height: 35px;
    font-family: 'Bangers', cursive;
  }
`;
