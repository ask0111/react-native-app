
import { INCREMENT, DECREMENT } from './types';

export const userLogin = (user) => {
  return { type: 'user',  user };
};

export const addedCartsRedux = (carts)=>{
  console.log(carts, 'redx')
  return{type: 'carts', carts: carts};
}

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};
