function media_aluno(){
    return
}
let calculo_media = (n1, n2, n3, n4) => (n1+n2+n3+n4)/4;
function resultado (){
    if (calculo_media >= 7){
        return console.log("A média final foi: ", resultado, "o aluno está aprovado!")
    }
    else {
        return console.log("A média final foi: ", resultado, "o aluno está reprovado!")
    }
}
console.log(media_aluno());
aluno_Bruno = calculo_media(10, 7, 7, 9);
console.log(resultado)