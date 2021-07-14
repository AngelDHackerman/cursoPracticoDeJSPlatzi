//  HELPERS
const esPar = (numero) => { //esta es para ver si el numero es par y poder hacer el calculo de la mediana.
    return (numero % 2 === 0); //esta condicional por si sola nos va a devolver un true o un false. 
}

const calcularMediaAritmetica = (lista) => { 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { // nuevoElemento recive el valor del indice del array y valorAcumulado actua como un acumulador para poder ir sumando el valor del array.
            return valorAcumulado + nuevoElemento;
        }
    ); 
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//  Calculadora de medianas 
const medianaSalarios = (lista) => { 
    const mitad = parseInt(lista.length / 2 );

    if (esPar(lista.length)) { 
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else { 
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//  Mediana General
const salariosCol = colombia.map(
    function (laPersona) { 
        return laPersona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salarioA,salarioB) { 
        return salarioA - salarioB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//  Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice( //Este metodo va a "cortar" el array desde el indice que yo le indique. El primer parametro es en que indice "cortar" y el segundo es cuantos elementos extraer, luego los va a mandar en un array.
    spliceStart,
    spliceCount,
); 

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);