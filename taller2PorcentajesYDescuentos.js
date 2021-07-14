/* con este console.log podemos imprimir varias variables como si fueran un objeto.

    console.log({  
    precioOriginal,
    descuento,
    porcentajePreciConDescuento,
    precioConDescuento
}) */

/* const precioOriginal = 1000;
const descuento = 25; */

const coupons = [
    "JuanDC_es_Batman", //15% off
    "pero_no_le_digas_a_nadie", // 30% off
    "es_un_secreto", // 50% off
];

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePreciConDescuento = 100 - descuento;
    const precioConDescuento = ( precio * porcentajePreciConDescuento) / 100;

    return precioConDescuento;
} 

const calcularPrecioConCupon = (precio, descuento) => { 
    const porcentajePreciConDescuento = 100 - descuento;
    const precioConDescuento = ( precio * porcentajePreciConDescuento) / 100;

    return precioConDescuento;
}

const onClickButtonPriceDiscount = () => { 
    const inputPrecio = document.getElementById("inputPrice");    
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("inputDiscount");
    const descuentoValue = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);

    const resultP = document.getElementById('resultPrice');
    resultP.innerHTML = `El precio ya con su descuento es: $${precioConDescuento}`;
    
    const inputCuopons = document.getElementById('inputCuopons');
    const cuponDescuento = inputCuopons.value;

    if (coupons.includes("JuanDC_es_Batman") && cuponDescuento === "JuanDC_es_Batman") { 
        const precioConCupon = calcularPrecioConCupon(precioValue, 15);
        resultP.innerHTML = `El precion con cupon de descuento es ${precioConCupon}`;

    } else if (coupons.includes("pero_no_le_digas_a_nadie") && cuponDescuento === "pero_no_le_digas_a_nadie") {
        const precioConCupon = calcularPrecioConCupon(precioValue, 30);
        resultP.innerHTML = `El precio con cupon de descuento es ${precioConCupon}`;

    } else if (coupons.includes("es_un_secreto") && cuponDescuento === "es_un_secreto") {
        const precioConCupon = calcularPrecioConCupon(precioValue, 50);
        resultP.innerHTML = `El precio con cupon de descuento es ${precioConCupon}`;
    } else { 
        resultP.innerHTML = `Cupon no valido`;
    }
}