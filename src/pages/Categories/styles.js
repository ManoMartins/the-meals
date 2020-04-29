import styled, { css } from 'styled-components/native';

import Categories from './index';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  /* align-items: center; */
`;

export const ItemGrid = styled.TouchableOpacity`
  flex: 1;
  margin: 15px;
  height: 150px;
`;

export const Content = styled.View`
  flex: 1;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #000;
  ${props => props.color && css`background-color: #FaF}`;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'ComicNeue-Bold';
  color: #340068;
`;
