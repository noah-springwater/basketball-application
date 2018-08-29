import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC8SSg-VP5JAHWy2fuyDC3-RTTpn6FTtY4",
  authDomain: "basketball-application.firebaseapp.com",
  databaseURL: "https://basketball-application.firebaseio.com",
  projectId: "basketball-application",
  storageBucket: "basketball-application.appspot.com",
  messagingSenderId: "51475552280"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/players');