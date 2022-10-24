import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-left: 20px;
  justify-content: space-between;
  font-size: 15px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:before {
    content: '';
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    position: absolute;
    margin-left: -10px;
    margin-top: 6px;
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  font-size: 8px;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 5px 10px;
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
