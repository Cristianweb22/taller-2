/*const products = [
    {
        'marca' : 'Chevrolet',
        'linea' : 'NPR',
        'modelo' : '2015',
        'carroceria' : 'Reparto',
        'km' : 100000,
        'foto' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HMfgOf6-FMtIIN_t5IKYklBJbKdXUD-JTtfWxOugBg&s.jpg',
        'precio' : 120000000,
        'tipo' : 'Camion',
        'isNuevo' : false,
        'id' : 'a1',
        'ubicacion' : 'Cali',
        'capacidad' : 4300,
        'matricula' : 'Yumbo'
    }
    ,
    {
        'marca' : 'Foton',
        'linea' : 'FVR Cummins 12.1',
        'modelo' : '2012',
        'carroceria' : 'Furgon',
        'km' : 160000,
        'foto' : 'https://dealers.rewebmkt.com/images/20220505010443-download-2.png',
        'precio' : 120000000,
        'tipo' : 'Camion',
        'isNuevo' : false,
        'id' : 'a2',
        'ubicacion' : 'Pasto',
        'capacidad' : 3500,
        'matricula' : 'Pasto'
    }
    ,
    {
        'marca' : 'Navitrans',
        'linea' : 'International',
        'modelo' : '2018',
        'carroceria' : 'SRS',
        'km' : 300000,
        'foto' : 'https://www.navitrans.com.co/portals/0/img/Vehiculos/International/MV/chasis%20mv.png',
        'precio' : 240000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false,
        'id' : 'a3',
        'ubicacion' : 'yumbo',
        'capacidad' : 34000,
        'matricula' : 'Guacarí'
    }
    ,
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 600000000,
        'tipo' : 'Tractomula',
        'isNuevo' : true,
        'id' : 'a4',
        'ubicacion' : 'Bogotá',
        'capacidad' : 34000,
        'matricula' : 'Facatativá'
    }
    ,
    {
        'marca' : 'Volkswagen',
        'linea' : 'Worker',
        'modelo' : '2013',
        'carroceria' : 'Reparto',
        'km' : 5000,
        'foto' : 'http://www.military-today.com/trucks/volkswagen_worker.jpg',
        'precio' : 38000000,
        'tipo' : 'Camion',
        'id' : 'a5',
        'ubicacion' : 'Cartagena',
        'capacidad' : 5200,
        'matricula' : 'Palmira'
    },
    {
        'marca' : 'Chevrolet',
        'linea' : 'Dmax',
        'modelo' : '2018',
        'carroceria' : 'Estacas',
        'km' : 89000,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_791252-MCO51446391510_092022-W.jpg',
        'precio' : 180500000,
        'tipo' : 'Camioneta',
        'isNuevo' : false,
        'id' : 'a6',
        'ubicacion' : 'Cali',
        'capacidad' : 1000,
        'matricula' : 'Cali'
    },
    {
        'marca' : 'Auteco',
        'linea' : 'Karguero',
        'modelo' : '2023',
        'carroceria' : 'Motocarro',
        'km' : 0,
        'foto' : 'https://www.aktmotos.com/sites/default/files/motorcycles/images/_0002_mg_6708.jpg',
        'precio' : 2300000,
        'tipo' : 'Motocarro',
        'isNuevo' : true,
        'id' : 'a7',
        'ubicacion' : 'Cali',
        'capacidad' : 500,
        'matricula' : 'Candelaria'
    },
    {
        'marca' : 'Ferrelaminas Mosquera',
        'linea' : 'Semirremolque',
        'modelo' : '2009',
        'carroceria' : 'Tanque',
        'km' : 635214,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_965373-MCO51759432251_092022-W.jpg',
        'precio' : 120000000,
        'tipo' : 'Semirremolque',
        'isNuevo' : false,
        'id' : 'a8',
        'ubicacion' : 'Ipiales',
        'capacidad' : 34000,
        'matricula' : 'Bucaramanga'
    },
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 400000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false,
        'id' : 'a9',
        'ubicacion' : 'Cali',
        'capacidad' : 35000,
        'matricula' : 'Yumbo'
    },
    {
        'marca' : 'Foton',
        'linea' : 'FVR Cummins 12.1',
        'modelo' : '2012',
        'carroceria' : 'Furgon',
        'km' : 160000,
        'foto' : 'https://dealers.rewebmkt.com/images/20220505010443-download-2.png',
        'precio' : 120000000,
        'tipo' : 'Camion',
        'isNuevo' : false,
        'id' : 'a2',
        'ubicacion' : 'Pasto',
        'capacidad' : 3500,
        'matricula' : 'Pasto'
    }
    ,
    {
        'marca' : 'Navitrans',
        'linea' : 'International',
        'modelo' : '2018',
        'carroceria' : 'SRS',
        'km' : 300000,
        'foto' : 'https://www.navitrans.com.co/portals/0/img/Vehiculos/International/MV/chasis%20mv.png',
        'precio' : 240000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false,
        'id' : 'a3',
        'ubicacion' : 'yumbo',
        'capacidad' : 34000,
        'matricula' : 'Guacarí'
    }
    ,
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 600000000,
        'tipo' : 'Tractomula',
        'isNuevo' : true,
        'id' : 'a4',
        'ubicacion' : 'Bogotá',
        'capacidad' : 34000,
        'matricula' : 'Facatativá'
    }
    ,
    {
        'marca' : 'Volkswagen',
        'linea' : 'Worker',
        'modelo' : '2013',
        'carroceria' : 'Reparto',
        'km' : 5000,
        'foto' : 'http://www.military-today.com/trucks/volkswagen_worker.jpg',
        'precio' : 38000000,
        'tipo' : 'Camion',
        'id' : 'a5',
        'ubicacion' : 'Cartagena',
        'capacidad' : 5200,
        'matricula' : 'Palmira'
    },
    {
        'marca' : 'Chevrolet',
        'linea' : 'Dmax',
        'modelo' : '2018',
        'carroceria' : 'Estacas',
        'km' : 89000,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_791252-MCO51446391510_092022-W.jpg',
        'precio' : 180500000,
        'tipo' : 'Camioneta',
        'isNuevo' : false,
        'id' : 'a6',
        'ubicacion' : 'Cali',
        'capacidad' : 1000,
        'matricula' : 'Cali'
    },
    {
        'marca' : 'Auteco',
        'linea' : 'Karguero',
        'modelo' : '2023',
        'carroceria' : 'Motocarro',
        'km' : 0,
        'foto' : 'https://www.aktmotos.com/sites/default/files/motorcycles/images/_0002_mg_6708.jpg',
        'precio' : 2300000,
        'tipo' : 'Motocarro',
        'isNuevo' : true,
        'id' : 'a7',
        'ubicacion' : 'Cali',
        'capacidad' : 500,
        'matricula' : 'Candelaria'
    },
    {
        'marca' : 'Ferrelaminas Mosquera',
        'linea' : 'Semirremolque',
        'modelo' : '2009',
        'carroceria' : 'Tanque',
        'km' : 635214,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_965373-MCO51759432251_092022-W.jpg',
        'precio' : 120000000,
        'tipo' : 'Semirremolque',
        'isNuevo' : false,
        'id' : 'a8',
        'ubicacion' : 'Ipiales',
        'capacidad' : 34000,
        'matricula' : 'Bucaramanga'
    },
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 400000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false,
        'id' : 'a9',
        'ubicacion' : 'Cali',
        'capacidad' : 35000,
        'matricula' : 'Yumbo'
    }
];
*/

import { getAllVehicles } from "./firebase.js";
const products = await getAllVehicles();
console.log(products);
// ESTABLECER LOS METODOS DE DISPLAY

const displayData = (data) => {
    const list = document.getElementById("product-list");
    list.innerHTML = '';
    
    data.forEach((ele) => {
        const card = document.createElement("div");
        card.className = "card medium";
        card.innerHTML=
            `<div class="card-image">
                <img src="${ele.foto}">
            </div>
            <div class="card-content">
                <span class="card-title h6-red">${ele.linea}</span>
                <p>${ele.marca}</p>
                <p>${ele.modelo}</p>
                <p>${ele.km}km</p>
                <h6>${Intl.NumberFormat("es", { style: "currency", currency: "COP" }).format(ele.precio)}</h6>
            </div>
            <div class="card-action">
                <a href="/details/?id=${ele.id}">Ver Vehiculo</a>
            </div>`;
        list.appendChild(card);
    });
};

function displayBodytype(){
    const bodyArr = [];
    products.forEach((product) => {
        if(!bodyArr.includes(product.carroceria)){
            bodyArr.push(product.carroceria)
        }
    });
    
    const bodyList = document.getElementById('bodyList')
    bodyArr.forEach((cat) => {
        const bodyElem = document.createElement('label')
        bodyElem.for = `${cat}`
        bodyElem.innerHTML = `
        <input id="${cat}" type="checkbox">
        <span>${cat}</span>`
    
        bodyList.append(bodyElem)
    })
}

function displayVehType(){
    const vehTypeArr = [];
    products.forEach((product) => {
        if(!vehTypeArr.includes(product.tipo)){
            vehTypeArr.push(product.tipo)
        }
    });
    
    const vehTypeList = document.getElementById('vehType')
    vehTypeArr.forEach((cat) => {
        const typeElem = document.createElement('option')
        typeElem.value = cat
        typeElem.id = cat
        typeElem.textContent = cat
    
        vehTypeList.append(typeElem)
    })
}

// LLAMAR METODOS

displayData(products);
displayBodytype();
displayVehType();

// LISTENERS PARA FILTROS
const keywordElem = document.getElementById('keyword')
keywordElem.addEventListener('change', (event) => handleKeyword(keywordElem))

const checkboxArray = document.querySelectorAll('input[type=checkbox]')
const bodyTypeArray = [];
for (var i = 0 ; i < checkboxArray.length ; i++){
    const bodyCheckElem = document.getElementById(`${checkboxArray[i].id}`)
    bodyCheckElem.addEventListener('change', (event) => {
        if(bodyCheckElem.checked){
            bodyTypeArray.push(bodyCheckElem.id)
        } else {
            bodyTypeArray.splice(bodyTypeArray.indexOf(bodyCheckElem.id),1)
        }
        handleCheckbox(bodyTypeArray)    
    })
}

const optionArray = document.querySelectorAll('option');
const optionForm = document.getElementById('vehType')
optionForm.addEventListener('change', (event) => handleVehType(optionForm.value))

//// METODOS DE EVENTOS
function handleKeyword(input){
    const keyword = input.value;
    const filterArray = products.filter((product) =>{
        return (product.marca.toLowerCase().includes(keyword.toLowerCase()) || product.carroceria.toLowerCase().includes(keyword.toLowerCase()) || product.tipo.toLowerCase().includes(keyword.toLowerCase()))
    })
    displayData(filterArray)
}

function handleVehType(input){
    const keyword = input;
    console.log(keyword)
    const filterArray = products.filter((product) => {
        return (product.tipo === keyword || keyword === '')
    })
    displayData(filterArray)
}

function handleCheckbox(input){
    const keyword = input;
    console.log(keyword)
    const filterArray = products.filter((product) => {
        return (keyword.indexOf(product.carroceria) > -1)
    })
    // ESTO ES PARA MEJORAR
    //if (keyword.length === []) console.log('arreglo vacio, debe retornar a arregloi original')
    displayData(filterArray);
}
// aqui inicializo el dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
});
