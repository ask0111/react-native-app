
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
             return await action.user;
             break;
        default:
            return await state;
    }
};


const fetch1 = async()=>{
    const res = await AsyncStorage.getItem('user');
    const userId = JSON.parse(res).person.id;
    const carts = await AsyncStorage.getItem(`${userId}`);
    const parseCarts = JSON.parse(carts);
    console.log('yes')
    if(parseCarts.length !== 0){
        return parseCarts;
    }else{
        return [];
    }
}
const cartsInitialState = fetch1();

const addedCartsReducer = (state = cartsInitialState, action) => {
    switch(action.type){
        case 'carts':
            console.log('carts', action.carts)
            return action.carts;
            break;
            default:
            console.log('carts1', action.carts)
            return state;
    }
};



// const initialState = fetch2;

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

export {userReducer, addedCartsReducer};
