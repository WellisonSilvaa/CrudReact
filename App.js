import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './src/views/UserForm'
import UserList from './src/views/UserList'
import { Button, Icon} from '@rneui/themed';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='UserList'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen 
          name='UserList' 
          component={UserList}
          options={({ navigation }) => {
            return {
              title: "Lista de Usuários",
              headerRight: () => (
                <Button
                  type='clear'
                  icon={<Icon name='add' size={25} color='white'/>}
                  onPress={() => navigation.navigate('UserForm')}
                />
                 
              )
            }
          }}
        />
        <Stack.Screen 
          name='UserForm' 
          component={UserForm}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screen = StyleSheet.create({
})