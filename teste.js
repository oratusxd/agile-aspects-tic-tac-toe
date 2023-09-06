
let matriz = [["", "", ""], ["", "", ""], ["", "", ""]];

if (usuario !== 'X' && usuario !== 'O') {
  console.log('Escolha inválida. Use X ou O.');
} else {
  console.log(`Você escolheu: ${usuario}`);
}


/*if (usuario == 'X' || usuario == 'O'){
    for (i = 0; i<= matriz.length;i++){
       
        matriz.push(usuario)
    }
} else {
    console.log('Desculpe, mas insira novamente a entre X ou O')
}

console.log(usuario)


/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(0,matriz.length)) */