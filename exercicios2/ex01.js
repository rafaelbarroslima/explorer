let estudantes = [{
    nome: 'Rafael',
    nota1: 7.5,
    nota2: 6
},
{
    nome: 'Amanda',
    nota1: 5,
    nota2 : 8
},
{
    nome: 'Luana',
    nota1: 2.5,
    nota2: 3.5
},
{
    nome: 'Maria',
    nota1: 10,
    nota2: 10
}];

function calculaMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}


for (let estudante of estudantes) {
    let media = calculaMedia(estudante.nota1, estudante.nota2);
    let condicao;

    if (media >= 7) {
        condicao = `Parabéns ${estudante.nome}, você passou no concurso!`;
    } else {
        condicao = `Não foi dessa vez, ${estudante.nome}. Tente novamente!`;
    }

    alert(`A média do(a) estudante: ${estudante.nome} é ${media}.\n${condicao}`);
}
