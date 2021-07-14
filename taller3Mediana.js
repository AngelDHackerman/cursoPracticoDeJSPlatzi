const lista = [
    1000000,
    300,
    450,
    879,
    900,
    45600,
    600000,
    2000000,
    50,
    2000000,
    35264,
];


//array.sort(function(a,b){return a - b}); Esta es la formula para usar .sort y ordenar numeros por su valor real 

const calcular = (arrayRecivido) => {
    let listaOrdernada;
    
    const arreglarArrayNumeros = (array) => { 
        array.sort(function(a,b){return a - b});
        listaOrdernada = array;
    }
    arreglarArrayNumeros(arrayRecivido);
    
    let mitadLista = Math.floor(listaOrdernada.length / 2 );
    
    const calcularMediaAritmetica = (lista) => { 
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) { // nuevoElemento recive el valor del indice del array y valorAcumulado actua como un acumulador para poder ir sumando el valor del array.
                return valorAcumulado + nuevoElemento;
            }
            ); 
            const promedioLista = sumaLista / lista.length;
            return promedioLista;
        }
        
        if (listaOrdernada.length % 2 == 0) { 
            const elemento1 = listaOrdernada[mitadLista - 1];
            const elemento2 = listaOrdernada[mitadLista];
            
            const promedioElemento1y2 = calcularMediaAritmetica ([
                elemento1,
                elemento2,
            ]);
            return  promedioElemento1y2;
            
        } else { 
            return listaOrdernada[mitadLista];
        }
        
};
    
    
    
    
    //--------------------------------------
    
    /* 
    
    const arreglarArrayNumeros = (array) => { // funcion para arreglar el array.
        array.sort(function(a,b){return a - b});
        listaOrdernada = array;
    }
    const mitadLista1 = Math.floor(lista1.length / 2);
    
    let mediana;
    
    const calcularMediaAritmetica1 = (lista) => { 
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) { //nuevoElemento recive el valor del indice del array y valorAcumulado actua como un acumulador para poder ir sumando el valor del array.
                return valorAcumulado + nuevoElemento;
            }
            ); 
            const promedioLista = sumaLista / lista.length;
            return promedioLista;
        }
        
        if (lista1.length % 2 == 0) { 
            const elemento1 = lista1[mitadLista1 - 1];
            const elemento2 = lista1[mitadLista1];
            
            const promedioElemento1y2 = calcularMediaAritmetica1 ([
                elemento1,
                elemento2,
            ]);
            mediana = promedioElemento1y2;
            
        } else { 
    mediana = lista1[mitadLista1];
} */