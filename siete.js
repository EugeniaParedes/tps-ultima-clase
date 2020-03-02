function mostrar()
{
var nota=0;
var sexo;
var sumaNotas=0;
var notaBaja=10;
var sexoNotaBaja;
var contVaronSeis=0;


//isNaN (num) --> v=a  !isNaN --> V=1

for (var i=0; i<5; i++) //se puede poner tamb i<5 (5 notas)
{
    do{
        nota= parseInt(prompt("ingrese una nota entre 0 y 10"));
        if(isNaN(nota)) //AL INGRESAR UNA LETRA ES VERDADERO ENTONCES TIRA EL ALERT
        {
            alert ("debe ser un numero entre 0 y 10");
            nota = -1; // obliga a que nota sea -1 para que repita el while en caso de que ponga letra
        }
    }while (nota<=0 || nota >10);

    sumaNotas = sumaNotas+ parseInt(nota);

    do
    {
        sexo=prompt("ingrese sexo f/m");

    }while (sexo!="f" && sexo !="m")
if (nota <=notaBaja)
{
    notaBaja=nota;
    sexoNotaBaja=sexo;
}
if (sexo=="m" && nota >=6)
{
    contVaronSeis++;
}
}
alert ("suma notas " + sumaNotas);
alert ("promedio de las notas totales " + (sumaNotas/i));
alert ("la nota mas baja es " + notaBaja + "de sexo" + sexoNotaBaja);
alert ("La cantidad de varones que su nota haya sido mayor o igual a 6" + contVaronSeis);



}
