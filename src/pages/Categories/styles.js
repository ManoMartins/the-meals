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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.color};
  padding: 15px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'ComicNeue-Bold';
  color: #340068;
`;
