import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 15px;
  width: 450px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: bold;
`;

export const TitleH2 = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;
