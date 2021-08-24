// var nome = "João";
// var idade = 22;
// var idade2 = 1;
// var frase = "Lorem ipsum dolor sit amet."

// alert(nome + " tem " + (idade - idade2) + " anos... por hora");

// console.log(nome);
// console.log(idade - idade2);
// console.log(frase.replace("Lorem", "Merol"));
// console.log(frase.toLocaleLowerCase());

//-------------------------------------------------

// var lista = ["a1", "a2", "a3", "a4"];

// lista.push("a5");
// lista.pop();
// console.log(lista.reverse());

// console.log(lista.toString());
// console.log(lista.join(" - "));

//-------------------------------------------------

// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}, {nome: "pêra", cor: "verde"}];

// console.log(frutas);

// alert(frutas[1].nome + " " + frutas[1].cor);

//-------------------------------------------------

// var idade = prompt("Qual sua idade?");

// if (idade >= 18){
//     alert("Maior de idade");
// }

// else{
//     alert("Menor de idade");
// }

//-------------------------------------------------

// var count = 0;
// while(count<=10){
//     console.log(count);
//     count++;
// }

//-------------------------------------------------

// var count;
// for(count=1; count<=5; count++){
//     alert(count);
// };

//-------------------------------------------------

// var d = new Date();
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d.getMonth());

//-------------------------------------------------

// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5, 10));

//-------------------------------------------------

// function validaIdade(idade){
//     var validar = true;
    
//     if(idade >= 18){
//         validar = true;
//     }
//     else{
//         validar = false;
//     }

//     return validar;

// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));

//-------------------------------------------------

function botao(){
    alert("Você clicou em um botão!");
}

function mensagem1(){
    document.getElementById("texto_mensagem").innerHTML = "maybe not for you <strong> JS</strong>.";
    // console.log(document.getElementById("mensagem"));
}

function mensagem2(){
    document.getElementById("texto_mensagem").innerHTML = "for you too <strong>JS</strong>.";
    // console.log(document.getElementById("mensagem"));
}

function back1(){
    document.getElementById("video-bg").outerHTML = '<video id="video-bg" src="./images/bg.mp4" mute autoplay loop></video>';

    console.log(document.getElementById("video-bg"));
}

function back2(){
    document.getElementById("video-bg").outerHTML = '<video id="video-bg" src="./images/gltich.mp4" mute autoplay loop></video>';

    console.log(document.getElementById("video-bg"));
}
