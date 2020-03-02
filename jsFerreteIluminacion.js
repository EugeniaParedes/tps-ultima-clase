/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var cantidad;
var precio=35;
var precioDescuento=0;

    cantidad = document.getElementById("Cantidad").value;

    if (cantidad < 6)
    {
        document.getElementById("precioDescuento").value = precio;
    }else
    {
        precioDescuento = precio - (precio * 50) /100;
        document.getElementById("precioDescuento").value = precioDescuento;
    }
    marca = document.getElementById("Marca").value;
    if (marca == "ArgentinaLuz" && cantidad == 5)
    {
        precioDescuento = precio - (precio * 40) /100;
        document.getElementById("precioDescuento").value = precioDescuento;
    }
}


SOLUCION DE PREFESORA
switch // porque hay caso de tal cantidad y caso de tal marca - los casos que no especifica se saca por default

var cantidad = document.getElementById("Cantidad").value;
var marca = document.getElementById("Marca").value;
var precio= 35;
var precioCantidad=0;
var precioFinal=0;
var ib= 0 ;

switch(cantidad)
{
    case "1":
    case "2":
    
    case "3":
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                precioCantidad= precio * cantidad;
                precioFinal = precioCantidad - ((precioCantidad*25)/100);
                break;
            default:
                precioCantidad= precio * cantidad;
                precioFinal = precioCantidad - ((precioCantidad*20)/100);
                break;
        }
        break;
        case "5":
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioCantidad
            }

            //falta
            if (precioFinal>120)
            {
                ib = ((precioFinal*10)/100);
                precioFinal = precioFinal + ib;
                alert ("IIBB Usted pago" + precioFinal + "siendo" + ib "el impuesto que se pagó.");
            }
}