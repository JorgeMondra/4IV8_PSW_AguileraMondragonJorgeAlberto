

//problema 3

function problema3(){

    //definir un alfabeto
    var alfabeto = ['A','B','C','D','E','F', 'G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //Vamos a obtener la entrada de los datos

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //Tengo que calcular cuantos caraceteres unicos hay


    var p3_res = '';

    p3_palabras.forEach( function (palabra, i){
        //Separar las palabras actuales del array que contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array =palabra.split('');

        //iteracion
        alfabeto.forEach(function (letra, J){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){

                //Comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado la agregamos aun array para contar las letras unicas
                    if(letras_unicas.indexOf(letra)<0){
                    letras_unicas.push(letra);
                    }

                }

            });
        });
        p3_res += 'Palabra:' + palabra + '=' + letras_unicas.length + '\n';

    });
    document.querySelector('#p3-output').textContent = p3_res;



}


