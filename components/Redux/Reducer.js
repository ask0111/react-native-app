
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetch = async()=>{
    const res = await AsyncStorage.getItem('user');
    if(res){
        return JSON.parse(res);
    }else{
        return res;
    }
}
const usersInitialState = fetch;

const userReducer = (state = usersInitialState, action) => {
    return state;
};

// const initialState = {
//   count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

export default {userReducer};
