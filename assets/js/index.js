let precio = 400000;
let base = document.querySelector(".precio-inicial");
base.innerHTML = precio;


function sumar(){
let precio = 400000;
let cantidad = document.querySelector(".cantidad");
let valorInicial = Number(cantidad.textContent);
cantidad.innerHTML = valorInicial + 1;
let valor = valorInicial + 1;
let resultado = parseInt(valor)* precio;

let result = document.querySelector(".valor-total");
result.innerHTML = resultado;
};



function resta(){
    let precio = 400000;
    let cantidad = document.querySelector(".cantidad");
    let valorInicial = Number(cantidad.textContent);
    cantidad.innerHTML = valorInicial - 1;
    let valor = valorInicial - 1;
    if(valor <= 0){
        let result = document.querySelector(".valor-total");
        result.innerHTML = 0;
        cantidad.innerHTML = 0
    }else{
        let resultado = parseInt(valor)* precio;
        let result = document.querySelector(".valor-total");
        result.innerHTML = resultado;
    }

    
};