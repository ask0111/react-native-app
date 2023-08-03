
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../details/Details';
import Home from '../home/Home';
import CheckOut from '../checkout/CheckOut';

const Stack = createStackNavigator();


function StackNavDetails() {
   
    return (<> 
    
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="details" component={Details} />
            <Stack.Screen name="checkout" component={CheckOut} />
          </Stack.Navigator>
    </>
    );
  }

  export default StackNavDetails;