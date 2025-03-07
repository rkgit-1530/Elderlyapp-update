import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const app = initializeApp({
    apiKey: Constants.expoConfig.extra.eas.firebaseApiKey,
    authDomain: Constants.expoConfig.extra.eas.firebaseAuthDomain,
    projectId: Constants.expoConfig.extra.eas.firebaseProjectId,
    storageBucket: Constants.expoConfig.extra.eas.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig.extra.eas.firebaseMessagingSenderId,
    appId: Constants.expoConfig.extra.eas.firebaseAppId,
});


export const  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export default app


