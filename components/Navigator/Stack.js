
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckOut from '../checkout/CheckOut';
import Cart from '../cart/Cart';
import Cash from '../checkout/Cash';
import Card from '../checkout/Card';

const Stack = createStackNavigator();


function StackNavigation() {
   
    return (<> 
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#B5C99A',
              }}}
          >
            <Stack.Screen name="carts" component={Cart} options={{ title: 'CARTS' }}/>
            <Stack.Screen name="checkout" component={CheckOut} options={{ title: 'CHECKOUT' }}/>
            <Stack.Screen name="cash" component={Cash} options={{ title: 'CASH ON DELIVERY' }}/>
            <Stack.Screen name="card" component={Card} options={{ title: 'CARD PAY' }}/>
          </Stack.Navigator>
    </>
    );
  }

  export default StackNavigation;