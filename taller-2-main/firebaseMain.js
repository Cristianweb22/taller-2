//import {addTask} from '.firebase'
import { addVehicle, getAllVehicles, newUser, signIn} from './firebase.js';

const button = document.getElementById('submit-button')
button?.addEventListener('click', (e) => clickForm(e))

const signupButton = document.getElementById('submitEmailButton')
signupButton?.addEventListener('click', (e) => clickSignup(e))

const signInButton = document.getElementById('logInButton')
logInButton?.addEventListener('click', (e) => clickLogIn(e))

getAllVehicles();

function clickForm(e){
    e.preventDefault();
    //console.log('prevent event')
    const marca = document.getElementById('marca').value
    const linea = document.getElementById('linea').value
    const modelo = document.getElementById('modelo').value
    const carroceria = document.getElementById('carroceria').value
    const capacidad = document.getElementById('capacidad').value
    const tipoVeh = document.getElementById('tipoVeh').value
    const kilometraje = document.getElementById('km').value
    const precio = document.getElementById('precio').value
    const ubicacion = document.getElementById('ubicacion').value
    const matricula = document.getElementById('matricula').value
    addVehicle(marca, linea, modelo, carroceria, capacidad, tipoVeh, kilometraje, precio, ubicacion, matricula);
}

function clickSignup(e){
    e.preventDefault();
    const email = document.getElementById('email')?.value;    
    const pass = document.getElementById('password')?.value;
    const passConfirm = document.getElementById('confirm-password')?.value;
    if(pass === passConfirm){
        newUser(email, pass);
    } else {
        alert('Las contraseñas no coinciden')
    }
}

function clickLogIn(e){
    e.preventDefault();
    const email = document.getElementById('email')?.value;    
    const pass = document.getElementById('password')?.value;
    signIn(email, pass);
}

//Como realizar el cambio tras iniciar sesion? debe ir a market.html (login y signup)
//Como Hacer el carrito para cada usuario?
//Como Subir una foto un producto?
//Por que no hace display del producto?

//Arregleme los filtro prro
