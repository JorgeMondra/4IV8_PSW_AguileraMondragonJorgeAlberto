function validar(formulario)
{
    var checkOK = "0123456789";
    var Costo = formulario. Costo .value;
    var Correcto = true;
    var Cuota = formulario. Cuota .value;

    for(var i = 0; i < Costo.length; i++)
    {
        var ch = Costo.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length)
        {
            Correcto = false;
            break;
        }
    }
}
