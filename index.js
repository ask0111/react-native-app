/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
// import store from './components/Redux/Store';
// import { Provider } from 'react-redux';

// const ReduxApp = ()=>{
//     return(
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
// }

// Initialize Firebase
firebase.initializeApp();
AppRegistry.registerComponent(appName, () => App);
