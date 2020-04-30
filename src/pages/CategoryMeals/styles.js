import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Content = styled.FlatList`
  width: 100%;
`;

export const MealsButton = styled.TouchableOpacity``;

export const MealItem = styled.View`
  margin: 10px 0;
  height: 200px;
  width: 100%;
  background-color: #340068;
  border-radius: 10px;
  overflow: hidden;
`;


export const MealHeader = styled.View`
  flex-direction: row;
  height: 85%;
`;

export const MealHeaderBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const MealHeaderTitle = styled.Text`
  font-family: 'ComicNeue-Bold';
  font-size: 22px;
  color: #FFD9DA;
  background-color: rgba(0, 0, 0, 0.36);
  padding: 5px 12px;
  text-align: center;
`;

export const MealDetail = styled.View`
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 15%;
`;

export const MealDetailText = styled.Text`
  font-family: 'ComicNeue-Bold';
  color: #FFD9DA;
`;
