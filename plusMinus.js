const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus (arr) {
    const size = arr.length; 
    let positivos = 0, negativos = 0, ceros = 0;
    arr.forEach( num => {
        if (num > 0) {
            positivos++;
        } else {
            if (num < 0) {
                negativos++;
            } else {
                ceros++;
            }
        }        
    });

    positivos = positivos / size;
    negativos = negativos / size;
    ceros = ceros / size;

    console.log(positivos.toFixed(6));
    console.log(negativos.toFixed(6));
    console.log(ceros.toFixed(6));
}

plusMinus(arr);