import styled from 'styled-components';

export const CardListWrapper = styled.section`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    width: 30%;
    content: '';
  }
`;
