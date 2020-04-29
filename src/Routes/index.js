import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CATEGORIES } from '../data/dummy-data';

import Colors from '../constants/Colors';
import Categories from '../pages/Categories';
import CategoryMeals from '../pages/CategoryMeals';
import MealDetails from '../pages/MealDetails';

const Route = createStackNavigator();


const Routes = () => {

  return (
    <Route.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.backgroundColor },
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: Colors.accentColor
      }}
      mode={"card"}
    >
      <Route.Screen
        name="Categories"
        component={Categories}
      />
      <Route.Screen
        name="CategoryMeals"
        component={CategoryMeals}
      />
      <Route.Screen name="MealDetails" component={MealDetails} />
    </Route.Navigator>
  )
};

    export default Routes;
