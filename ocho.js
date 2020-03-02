function mostrar()
{
    var letra;
    var numero;
    var respuesta="si";
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var sumaNegativos;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    //  while (isNaN(numero))
    //{
     //   alert (prompt("invalido, ingrese un numero"));
    // }
    
    while (respuesta == "si")
    {
        letra= prompt("ingrese una letra");
        numero = parseInt(prompt("ingrese un numero"));
      
    while (numero < -100 || numero > 100 )
    {
        numero = parseInt(prompt("ingrese numero"));
        
    }
    
if (numero % 2 == 0)
{
  contadorPares++;
}else 
{
    contadorImpares++;
}
if (numero == 0)
{
    contadorCeros++;
}
if (numero > 0)
{
    contadorPositivos++;
    acumuladorPositivos = contadorPositivos + numero;
}else
{
    sumaNegativos = sumaNegativos + numero;
}
if (numero > numeroMax)
{
    numeroMax = numero;
    letraMax = letra;
}else if (numero < numeroMin)
{
    numeroMin = numero;
    letraMin = letra;
}
    respuesta = prompt("desea ingresar otro numero? si/no");
    }
document.write("la cantidad de numeros pares es " + contadorPares);
document.write("la cantidad de numeros impares es " + contadorImpares);
document.write("la cantidad de ceros " + contadorCeros); 
document.write("El promedio de todos los números positivos ingresados" + (acumuladorPositivos/contadorPositivos));
document.write("La suma de todos los números negativos " + sumaNegativos);
document.write("El número máximo es " + numeroMax + "y la letra " + letraMax);
document.write("El número minimo es " + numeroMin + "y la letra " + letraMin);

}



