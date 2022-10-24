import styled from 'styled-components';

export const Form = styled.form`
  max-width: 360px;
  border-radius: 5px;
  padding: 10px;
  background: linear-gradient(90deg, #cfecd0, #ffc5ca);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;
`;

export const Button = styled.button`
  margin-left: 20px;
  font-size: 10px;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    background-position: right center;
  }
`;
