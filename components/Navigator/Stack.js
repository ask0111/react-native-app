
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckOut from '../checkout/CheckOut';
import Cart from '../cart/Cart';

const Stack = createStackNavigator();


function StackNavigation() {
   
    return (<> 
          <Stack.Navigator >
            <Stack.Screen name="carts" component={Cart} />
            <Stack.Screen name="checkout" component={CheckOut} />
          </Stack.Navigator>
    </>
    );
  }

  export default StackNavigation;