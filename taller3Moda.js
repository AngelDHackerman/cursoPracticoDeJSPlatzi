const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista = [
    1,
    2,
    3,
    1,
    3,
    2,
    6,
    5,
    4,
    3,
    2,
    1,
    6,
    5,
    4,
    3,
    2,
    1,
    8,
    1,
    3,
    5,
    4,
    8,
    1,
    3,
    4,
    7,
    9,
    8,
    4,
    3,
    6,
    4,
    8,
];

const lista1Count = {};

lista1.map (
    function (elemeto) { //aqui recivimos el elemento de cada una de las iteraciones. 
        if (lista1Count[elemeto]) { 
            lista1Count[elemeto] += 1;
        } else { 
            lista1Count[elemeto] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) { 
        return valorAcumulado[1] - nuevoValor[1]; //alt + z Colocamos [1], porque es el segundo indice que nos intersa ordenar, aqui lo ordenamos por el numero de veces que se repitio y no por el valor del primer valor que seria su 'nombre' en el objeto creado. (si quitamos el [1] se ordenaria de otra forma)
    }
); // object.entries le enviamos como argumento el objeto que queremos convertir en array 

const moda = lista1Array[lista1Array.length - 1]; // Asi entramos a la ultima posicion de nuestro array. 


//ASI FUNCIONA EL .SORT 
/* 
.sort funciona asi: 
function (elementoA, elementoB) { 
    if (elementoA > elementoB) return 1;
    if (elementoA == elementoB) return 0;
    if (elementoA < elementoB) return -1;
} */

        //RETO DE HACER DEL CODIGO UNA SOLA FUNCION.

const calcularModa = (listaArray) => {
    const lista1Count = {};

    listaArray.map (
        function (elemeto) { //aqui recivimos el elemento de cada una de las iteraciones. 
            if (lista1Count[elemeto]) { 
                lista1Count[elemeto] += 1;
            } else { 
                lista1Count[elemeto] = 1;
            }
        }
    );

    const listaArray1 = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor) { 
            return valorAcumulado[1] - nuevoValor[1]; //alt + z Colocamos [1], porque es el segundo indice que nos intersa ordenar, aqui lo ordenamos por el numero de veces que se repitio y no por el valor del primer valor que seria su 'nombre' en el objeto creado. (si quitamos el [1] se ordenaria de otra forma)
        }
    );
    
    return listaArray1[listaArray1.length - 1];
}