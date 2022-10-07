var obejtoPessoa = {
    nome: "Camilla Maria",
    idade: 25,
    interesse: "carnaval, viagens, geoprocessamento"
}
console.log(obejtoPessoa.nome, "tem", obejtoPessoa.idade, "anos e se interessa por", obejtoPessoa.interesse,".");
var arrayPessoa = ['Camilla Maria', '25', 'carnaval', 'viagens', 'geoprocessamento'];
console.log(arrayPessoa[0], "tem", arrayPessoa[1], "anos e se interessa por", arrayPessoa[2],",",arrayPessoa[3], "e", arrayPessoa[4]);
function listP(obejtoPessoa){
    for (var i in obejtoPessoa){
        console.log(i)
    }
}
function listA(arrayPessoa){
    for (var i of arrayPessoa){
        console.log(i)
    }
}
listP(obejtoPessoa);
listA(arrayPessoa);