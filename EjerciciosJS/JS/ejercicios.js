
function ejercicio1()
{
    let capital_final, capital_inicial;
    capital_inicial = parseFloat (document.formulario1.capital_inicial.value);
    capital_final=capital_inicial*1.02;
    document.formulario1.capital_final.value = capital_final;
}

function ejercicio2()
{
    let n;
    let comisiones, pago, sueldo_base, venta_1, venta_2;
    let venta_3;
    sueldo_base = parseFloat (document.formulario2.sueldo_base.value);
    venta_1 = parseFloat (document.formulario2.venta_1.value);
    venta_2 = parseFloat (document.formulario2.venta_2.value);
    venta_3 = parseFloat (document.formulario2.venta_3.value);
    comisiones=(venta_1+venta_2+venta_3)*0.1;
    pago=sueldo_base+comisiones;
    document.formulario2.comisiones.value = comisiones;
    document.formulario2.pago.value = pago;
}

function ejercicio3()
{
    let costo_del_articulo_1, descuento, pago_final;
    let total_de_la_compra;
    costo_del_articulo_1 = parseFloat (document.formulario3.costo_del_articulo_1.value);
    total_de_la_compra=costo_del_articulo_1;
    descuento=total_de_la_compra*0.15;
    pago_final=total_de_la_compra-descuento;
    document.formulario3.descuento.value = descuento;
    document.formulario3.pago_final.value = pago_final;
    
}

function ejercicio4()
{
    let calificacion_final, examen_final, parcial_1, parcial_2, parcial_3;
    let promedio_parciales, trabajo_final;
    examen_final = parseFloat (document.formulario4.examen_final.value);
    parcial_1 = parseFloat (document.formulario4.parcial_1.value);
    parcial_2 = parseFloat (document.formulario4.parcial_2.value);
    parcial_3 = parseFloat (document.formulario4.parcial_3.value);
    trabajo_final = parseFloat (document.formulario4.trabajo_final.value);
    promedio_parciales=(parcial_1+parcial_2+parcial_3)/3;
    calificacion_final=promedio_parciales*0.55+examen_final*0.3+trabajo_final*0.15;
    document.formulario4.calificacion_final.value = calificacion_final;
    document.formulario4.promedio_parciales.value = promedio_parciales;
}

function ejercicio5(){

    var mujeres = parseInt(document.querySelector('#p5-input1').value);
    var hombres = parseInt(document.querySelector('#p5-input2').value);
    var totalAlumn = mujeres + hombres;
    var porMuj = (mujeres * 100)/totalAlumn;
    var porHom = (hombres * 100)/totalAlumn;
    document.querySelector('#p5-output').textContent = 'Total de Alumnos: ' + totalAlumn + '\n' + 'Porcentaje de Mujeres: ' + porMuj + '%' + '\n' + 'Porcentaje de Hombres: ' + porHom + '%';
}
function ejercicio6()
{
    let anno_actual, anno_de_nacimiento, dia_actual, dia_de_nacimiento, edad;
    let mes_actual, mes_de_nacimiento;
    anno_actual = parseInt (document.formulario6.anno_actual.value);
    anno_de_nacimiento = parseInt (document.formulario6.anno_de_nacimiento.value);
    dia_actual = parseInt (document.formulario6.dia_actual.value);
    dia_de_nacimiento = parseInt (document.formulario6.dia_de_nacimiento.value);
    mes_actual = parseInt (document.formulario6.mes_actual.value);
    mes_de_nacimiento = parseInt (document.formulario6.mes_de_nacimiento.value);
    edad=anno_actual-anno_de_nacimiento;
    if(mes_de_nacimiento>mes_actual||(mes_de_nacimiento==mes_actual&&dia_de_nacimiento>dia_actual))
        edad=edad-1;
    document.formulario6.edad.value = edad;
}