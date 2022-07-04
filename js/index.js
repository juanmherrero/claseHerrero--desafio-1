
let precioAuto = 1800;
let precioMoto = 500;
let precioCamion = 8630;
let plan = prompt("Ingrese alguno de los siguientes planes: Auto - Moto - Camión");

if(plan === "moto" || plan === "Moto"){
    precio = precioMoto
    alert("El precio del seguro para motos es: $"+precio+" (sin IVA)");
    /* cálculo IVA */
    function calcIva (precio){
        return (precio * 0.08)
    }
    var iva = calcIva(precio);
    ivaDos= iva.toFixed(2);
    alert("El IVA del seguro es $"+ivaDos);
    /* IVA + precio */
    function sumIva(precio){
        return (precio + (precio * 0.08));
    }
    var precioIva = sumIva(precio);
    precioIvaDos= precioIva.toFixed(2);
    alert("El precio con IVA del seguro es $"+precioIvaDos);
    document.write("<h3> El precio del seguro para motocicletas es: $"+precio+"</h3>");
    document.write("<h3> El IVA del seguro es: $"+ivaDos+"</h3>");
    document.write("<h3> El precio final del seguro para motocicletas es: $"+precioIvaDos+"</h3>");
}else if(plan === "auto" || plan === "Auto"){
    precio = precioAuto
    alert("El precio del seguro para autos es: $"+precio+" (sin IVA)");
    /* cálculo IVA */
    function calcIva (precio){
        return (precio * 0.08)
    }
    var iva = calcIva(precio);
    ivaDos= iva.toFixed(2);
    alert("El IVA del seguro es: $"+ivaDos);
    /* IVA + precio */
    function sumIva(precio){
        return (precio + (precio * 0.08));
    }
    var precioIva = sumIva(precio);
    precioIvaDos= precioIva.toFixed(2);
    alert("El precio con IVA del seguro es: $"+precioIvaDos);
    document.write("<h3> El precio del seguro para automóviles es: $"+precio+"</h3>");
    document.write("<h3> El IVA del seguro es: $"+ivaDos+"</h3>");
    document.write("<h3> El precio final del seguro para automóviles es: $"+precioIvaDos+"</h3>");
}else if(plan === "camion" || plan === "Camion" || plan === "camión" || plan === "Camión"){
    precio = precioCamion
    alert("El precio del seguro para camiones es: $"+precio);
    /* cálculo IVA */
    function calcIva (precio){
        return (precio * 0.08)
    }
    var iva = calcIva(precio);
    ivaDos= iva.toFixed(2);
    alert("El IVA del seguro es: $"+ivaDos);
    /* IVA + precio */
    function sumIva(precio){
        return (precio + (precio * 0.08));
}   
    var precioIva = sumIva(precio);
    precioIvaDos= precioIva.toFixed(2);
    alert("El precio con IVA del seguro es: $"+precioIvaDos);
    document.write("<h3> El precio del seguro para camiones es: $"+precio+"</h3>");
    document.write("<h3> El IVA del seguro es: $"+ivaDos+"</h3>");
    document.write("<h3> El precio final del seguro para camiones es: $"+precioIvaDos+"</h3>");
}else{
    alert('No es un plan válido');
}