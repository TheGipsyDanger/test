import styled from 'styled-components/native';

export const Triangule = styled.View`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 80px;
  border-right-width: 80px;
  border-bottom-width: 100px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: white;
  transform: rotate(180deg);
  position: absolute;
  bottom: -40px;
`;
