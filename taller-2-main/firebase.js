// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCLUJ4i1yLOWD56lkwGy2IOXkqND3Gvq5A",
  authDomain: "fir-ccm-store.firebaseapp.com",
  projectId: "fir-ccm-store",
  storageBucket: "fir-ccm-store.appspot.com",
  messagingSenderId: "1020575714617",
  appId: "1:1020575714617:web:4f0798577f15f77dad6ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);// Your web app's Firebase configuration

const auth = getAuth();

// Funciones para agregar datos a la db

export async function addVehicle(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9){
    try {
      const docRef = await addDoc(collection(db, "products"), {
        marca: param0,
        linea: param1,
        modelo: param2,
        carroceria: param3,
        capacidad: param4,
        tipoVeh: param5,
        km: param6,
        precio: param7,
        ubicacion: param8,
        matricula: param9
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export async function getAllVehicles(){
  const querySnapshot = await getDocs(collection(db, "products"));
  const mappedArray = [];
  querySnapshot.forEach((doc) => {
    mappedArray.push(doc.data())
  });
  console.log('Get All Vehicles Done');
  return mappedArray;
}

export function newUser(email, password){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //Signed In
    const user = userCredential.user;
    alert(user + ' was created succesfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })
};

export function signIn(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert('Sign In Succesful Yayyy')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}