import React from 'react';
import { Text, Button } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';

import { Container } from './styles';

const CategoryMeals = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const category = CATEGORIES.find(cate => cate.id === categoryId);

  navigation.setOptions({ title: category.title })

  return (
    <Container>
      <Text>{category.title}</Text>
      <Button
        title="Test"
        onPress={() => navigation.setOptions({title: 'oi'})}
      />
    </Container>
  );
};

export default CategoryMeals;
