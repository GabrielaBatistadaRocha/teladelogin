let numero1= parseInt(Math.random()*50+1);
let numero2= parseInt(Math.random()*50+1);

document.getElementById("nsoma").innerHTML=numero1 + " + " + numero2;

function teste (){
    let result = document.getElementById("result").value;

    if (numero1 + numero2 == result) {
        alert ("Login realizado com sucesso!");
    } else{
        alert ("A soma está incorreta, tente novamente");
    }
}