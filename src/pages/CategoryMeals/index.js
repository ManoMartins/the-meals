import React from 'react';
import { Text, View } from 'react-native';

import { CATEGORIES, MEALS } from '../../data/dummy-data';

import { Container, Content, MealsButton, MealItem, MealHeader, MealHeaderBackground, MealHeaderTitle, MealDetail, MealDetailText } from './styles';

const CategoryMeals = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const category = CATEGORIES.find(cate => cate.id === categoryId);
  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  navigation.setOptions({ title: category.title })

  return (
    <Container>
      <Content
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MealItem>
            <MealsButton>
              <View>
                <MealHeader>
                  <MealHeaderBackground source={{uri: item.imageUrl}}>
                    <MealHeaderTitle>{item.title}</MealHeaderTitle>
                  </MealHeaderBackground>
                </MealHeader>
                <MealDetail>
                  <MealDetailText>{item.duration}m</MealDetailText>
                  <MealDetailText>{item.complexity.toUpperCase()}</MealDetailText>
                  <MealDetailText>{item.affordability.toUpperCase()}</MealDetailText>
                </MealDetail>
              </View>
            </MealsButton>
          </MealItem>
        )}
      />
    </Container>
  );
};

export default CategoryMeals;
