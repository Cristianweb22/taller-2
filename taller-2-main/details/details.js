console.log(new URLSearchParams(window.location.search).get('id'));

import { getAllVehicles , getVehicle} from "../firebase.js";
const products = await getAllVehicles();
//const vehicle = await getVehicle(new URLSearchParams(window.location.search).get('id'))
const detailElem = products.filter((product) => {
    return (product.hash === new URLSearchParams(window.location.search).get('id'))
})
console.log('details.js says -> ' + detailElem)

const productHead = document.getElementById('product-head')
productHead.innerHTML = `
    <h4 class='h4-blue'>${detailElem[0].marca}</h4>
    <h4 class='h4-blue'>${detailElem[0].linea}</h4>
    <h6 class='h6-red'>${Intl.NumberFormat("es", {style: 'currency', currency: 'COP'}).format(detailElem[0].precio)}</h6>
    <h6>Modelo: ${detailElem[0].modelo}</h6>`

const productInfo = document.getElementById('product-info')
productInfo.innerHTML = `
    <p>${detailElem[0].km}km</p>
    <p>Actualmente ubicado en: ${detailElem[0].ubicacion}</p>
    <p>Carroceria tipo: ${detailElem[0].carroceria}</p>
    <p>Capacidad de Carga: ${detailElem[0].capacidad}kg</p>
    <p> Secretaria de TTO y TPTE de ${detailElem[0].matricula}</p>`

const productImg = document.getElementById('main-img')
const productSmallImgArr = []

productImg.setAttribute('src', detailElem[0].foto)