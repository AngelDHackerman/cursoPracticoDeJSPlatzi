const calcularMediaAritmetica = (lista) => { 
  /*let sumaLista = 0;
    
    for (let i = 0; i < lista.length; i++) { 
        sumaLista += lista[i];
    } */
    const sumaLista = lista.reduce( //reduce va a recivir una funcion como argumento y luego va ir sumando cada uno de los elementos
       function (valorAcumulado = 0, nuevoElemento) { //nuevoElemento recive el valor del indice del array y valorAcumulado actua como un acumulador para poder ir sumando el valor del array.
        return valorAcumulado + nuevoElemento
       }
    ); 
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

