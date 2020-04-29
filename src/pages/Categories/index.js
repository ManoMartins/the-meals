import React from 'react';
import { FlatList, View } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';

import { Container, ItemGrid, Content, Title } from './styles';

const Categories = ({ navigation }) => (
  <Container>
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ItemGrid
          onPress={() => {
            navigation.navigate('CategoryMeals', {
              categoryId: item.id,
            });
          }}
        >
          <Content color={item.color}>
            <Title>{item.title}</Title>
          </Content>
        </ItemGrid>
      )}
    />
  </Container>
);

export default Categories;
