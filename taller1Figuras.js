//  Constantes del cuadrado, triangulo y circulo.

    //cuadro con HTML

const inputCuadradoHTML = document.getElementById('InputCuadrado');

    //triangulo con HTML

const inputLado1TrianguloHTML = document.getElementById('inputTriangulo1');
const inputLado2TrianguloHTML = document.getElementById('inputTriangulo2');
const inputBaseTrianguloHTML = document.getElementById('inputTrianguloBase');

    //circulo con HTML

const inputRadioHTML = document.getElementById('inputRadioCirculo');

//Codigo del cuadrado 

    console.group('Cuadrados');     //CON ESTO AGRUPAMOS LOS CONSOLE.LOG EN LA CONSOLA

const perimetroCuadrado = (lado) => {
    return lado * 4;
}
perimetroCuadrado();
//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = (lado) => { 
    return lado ** 2;
} 

    console.groupEnd();             //AQUI SE HACE EL CIERRE DEL GRUPO DE CONSOLE.LOG

//Codigo del triangulo

    console.group('Triangulos');

const perimetroTriangulo = (lado1, lado2, base) => { 
    return lado1 + lado2 + base;
}

const alturaTriangulo = (lado1, base) => {      //Aqui obtenemos la altura usando un lado del triangulo y su base. 
    return altura = Math.sqrt( (lado1 ** 2) - ( (base / 2) ** 2 ));
    
}    

const areaTriangulo = (base, altura) => { 
    return (base * altura) / 2;
} 

    console.groupEnd('Triangulos');

// Codigo del circulo 

    console.group('Circulos');

// Diametro 
const diametroCirculo = (radio) => { 
    return radio * 2;
}

// PI

const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia

const perimetroCirculo = (radio) => { 
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area

const areaCirculo = (radio) => { 
    return (radio **2) * PI;
}

    console.groupEnd();

    //  Aqui interactuamos con el HTML.
    //  Calculando el cuadrado.

const calcularPerimetroCuadrado = () => { 
    const value = inputCuadradoHTML.value; //con esto optenemos el valor que escribieron los usuarios en el input en el HTML.

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

const calcularAreaCuadrado = () => { 
    const value = inputCuadradoHTML.value; //con esto optenemos el valor que escribieron los usuarios en el input en el HTML.

    const area = areaCuadrado(value);
    alert(area);
}

    //  Calculando el triangulo.

const calcularPerimetroTriangulo = () => {     
    const value1Triangulo = parseInt(inputLado1TrianguloHTML.value);
    const value2Triangulo = parseInt(inputLado2TrianguloHTML.value);
    const valueBaseTriangulo = parseInt(inputBaseTrianguloHTML.value);

    const perimetro = perimetroTriangulo(value1Triangulo, value2Triangulo, valueBaseTriangulo);
    alert(perimetro);
}

const calcularAreaTriangulo = () => { 
    const value1Triangulo = parseInt(inputLado1TrianguloHTML.value);
    const valueBaseTriangulo = parseInt(inputBaseTrianguloHTML.value);

    let altura = alturaTriangulo(value1Triangulo, valueBaseTriangulo);
    
    const area = areaTriangulo(valueBaseTriangulo, altura);
    alert(area);
}

const calcularAlturaTrianguloIsoceles = () => { 
    const valorLado1 = parseInt(inputLado1TrianguloHTML.value);
    const valorLado2 = parseInt(inputLado2TrianguloHTML.value);
    const valorBase = parseInt(inputBaseTrianguloHTML.value);

    if( valorLado1 === valorLado2 && valorLado1 != valorBase ) {
        let altura = Math.sqrt((valorLado1 ** 2) - ((valorBase / 2) ** 2));
        let alturaFixed = altura.toFixed(2);
        alert(
`Es un triangulo isoceles! 
Su altura es ${alturaFixed}`
);
        } else { 
            alert('No es un isoceles.');
        }
}

    //  Calculando el circulo.

const calcularPerimetroCirculo = () => { 
    const radioCirculo = parseInt(inputRadioHTML.value);
    
    const perimetroCirculo = (PI * 2) * radioCirculo;
    alert(perimetroCirculo);
}

const calcularAreaCirculo = () => { 
    const radioCirculo = parseInt(inputRadioHTML.value);

    const areaCirculo = PI * (radioCirculo ** 2);
    alert (areaCirculo);
}