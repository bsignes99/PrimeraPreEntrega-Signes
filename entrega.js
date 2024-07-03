let uno = 1000;
let dos = 900;
let tres = 800;
let cuatro = 600;  
let cinco = 1399;

let iniciarCompra = Number(prompt("Bienvenido a Phonzone, le gustaria iniciar una compra? 1= Sí, 0= No"));
let totalcompra = 0;


if(iniciarCompra){
    let carrito = Number(prompt("Ingrese el codigo de producto que desee comprar, cuando finalice su compra ingrese 0"));
    while(carrito != 0){
        if(carrito > 0 && carrito < 6){
            switch (carrito){
                case 1 :
                    totalcompra += uno;
                    break;
                case 2:
                    totalcompra += dos;
                    break;
                case 3:
                    totalcompra += tres;
                    break;
                case 4:
                    totalcompra += cuatro;
                    break;
                case 5:
                    totalcompra += cinco;  
                    break;   
            }
            carrito = Number(prompt("Ingrese el codigo de producto que desee comprar, cuando finalice su compra ingrese 0"));
        } else{
            alert("Codigo incorrcto");
            carrito = Number(prompt("Ingrese el codigo de producto que desee comprar, cuando finalice su compra ingrese 0"));
        }
    }
} else{
    alert("Gracias por visitar nuestra pagina! Puede continuar viendo nuestros catalogos");
    console.log("Gracias por visitar nuestra pagina! Puede continuar viendo nuestros catalogos");
}

function compraImp(n){
    let impuesto = (30 * n) / 100;
    let total = n + impuesto;
    return total;
}

let cuotas;
let cuotaValor;

if (totalcompra === 0){
    alert("Vuelva pronto!")
}else {
     cuotas = Number(prompt("El total de su compra es $" + totalcompra + " desea pagar en cuotas? 1= Sí, 0= No "));
    if (cuotas){
        let cantCuotas = Number(prompt("ingrese si quiere 3, 6 o 12 coutas. las coutas mayor a 3 tienen un impuesto del 30%"));
        console.log(cantCuotas);
        if(cantCuotas !== 3 || cantCuotas !== 6|| cantCuotas !== 12){
            while(cantCuotas !== 3 && cantCuotas !== 6 && cantCuotas !== 12){
                cantCuotas = Number(prompt("Numero de cuotas incorrecto, elija 3, 6 o 12 cuotas."));
                console.log(cantCuotas);
            }
        }
        if(cantCuotas == 3 || cantCuotas == 6|| cantCuotas == 12){
         console.log(cantCuotas);
             switch(cantCuotas){
                 case 3:
                     cuotaValor= totalcompra / 3;
                     alert("El total de su compra es $" + totalcompra + " en 3 cuotas de:$" + cuotaValor);
                    break;
                case 6:
                    cuotaValor= (compraImp(totalcompra) / 6);
                    alert("El total de su compra es $" + compraImp(totalcompra) + " en 6 cuotas de:$" + cuotaValor);
                    break;
                    case 12:
                        cuotaValor= (compraImp(totalcompra) / 12);
                        alert("El total de su compra es $" + compraImp(totalcompra) + " en 12 cuotas de:$" + cuotaValor);
                        break;      
                    }
                    alert("Gracias por su compra!")
                }
            }else{   
                alert("El total es de $" + totalcompra + ". Gracias por su compra!");
            }
    }
