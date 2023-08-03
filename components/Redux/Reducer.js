
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetch = async()=>{
    console.log('fetch', 'll')
    const res = await AsyncStorage.getItem('user');
    if(res){
        console.log('fetch', 'a')
        return JSON.parse(res);
    }else{
        console.log('fetch', 'b')
        return {};
    }
}
const userInitialState = fetch();

const userReducer =  async(state = userInitialState, action) => {
    console.log(await state, 's')
    switch(action.type){
        case 'user':
             return await state;
             break;
        default:
            return await state;
    }
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

export default userReducer;
