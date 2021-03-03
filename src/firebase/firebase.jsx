import firebase from 'firebase/app';
import '@firebase/firestore';

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
    apiKey: "AIzaSyAV_5ln18TQ5iVoBPleG2HiwGsorKnaxak",
    authDomain: "fir-dabd8.firebaseapp.com",
    projectId: "fir-dabd8",
    storageBucket: "fir-dabd8.appspot.com",
    messagingSenderId: "1096292895599",
    appId: "1:1096292895599:web:46607ee8b1334b4afff69a"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}