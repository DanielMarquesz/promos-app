import Login from './app/screens/login'
import Home from './app/screens/home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './app/screens/settings';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
      // Voltar a Home
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Voltar" 
        component={Home}
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 }
        }}/>
      <Drawer.Screen name="Settings" component={Settings}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={DrawerMenu}/>
        {/* <Stack.Screen name="DrawerMenu" component={DrawerMenu}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
  // return <WelcomeScreen/>
}
