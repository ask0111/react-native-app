
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../details/Details';
import Home from '../home/Home';
import CheckOut from '../checkout/CheckOut';

const Stack = createStackNavigator();


function StackNavDetails() {
   
    return (<> 
    
          <Stack.Navigator 
           screenOptions={{
            headerStyle: {
              backgroundColor: '#6F61C0',
            },
            headerTitleStyle: {
              color: 'black'
            }
          }}
          initialRouteName='home'>
            <Stack.Screen name="home" component={Home} options={{ title: 'PRODUCTS' }} />
            <Stack.Screen name="details" component={Details} options={{ title: 'PRODUCT DETAILS' }}/>
            <Stack.Screen name="checkout" component={CheckOut} options={{ title: 'CHECKOUT' }}/>
          </Stack.Navigator>
    </>
    );
  }

  export default StackNavDetails;