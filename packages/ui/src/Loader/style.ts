import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #ff6363; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 10% auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
