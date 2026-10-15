// //arquivo != pasta

// //Arrays === lista

// let compras = ["ovo", "arroz", "feijão branco", "sabão em pó", "sabão em barra"];

// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra =>
//     compra.toLowerCase().includes(busca.
//         toLowerCase().trim()
// ))

// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);


// let users = ["Pedro","Ana","Joana","Diego","Davi","Messias","Crisiano"];

// let searchUser = prompt("Digite o nome do usuário que deseja buscar: ")

// //lembrando que, meu usuario adm não pode mandar em branco a busca. chamamos isso de tratativa de erros.

// if(searchUser === ""){
//     console.log("Não pode enviar em branco");
// }
// else{
//     //retorna o usuário que for encontrado
//     let user = users.find(user =>
//         user.toLowerCase().includes(searchUser.toLowerCase().trim())
//     )
//     //Devemos tratar também caso a busca não retorne nenhum resultado
//     if(user.length === 0){
//         //usuário não econtrado
//         console.log("User not found")
//     }
//     else{
//         console.log("Usuário encontrado: ".concat(user))
//     }
// }




let fila = [ "Pedro" , "Ana" , "Joana" , "Diego" , "Davi" , "Messias" , "Cristiano" ];
console.log(fila);
let caraNormal = prompt("Digite o nome do clinte normal");
fila.push(caraNormal);
console.log(fila);

let addPrioridade = prompt("Digite o nome do cliente idoso para o início da fila:");
fila.unshift(addPrioridade);
console.log(fila);

fila.shift();
console.log(fila);

fila.pop();
console.log(fila);

let searchUser = prompt( "Digite o nome do usuário que deseja buscar:" );
if(searchUser.trim() === ""){
    console.log( "Não pode enviar em branco" );
} else {
    let user = fila.find(u => u.toLowerCase().includes(searchUser.toLowerCase().trim()));
    if(!user){
        console.log( "User not found" );
    } else {
        console.log( "Usuário encontrado: " + user);
    }
}


