// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const retornaPar = (n) => {
        if (n % 2 === 0) {
            return n;
        }
    };

    const pares = array.filter(retornaPar);

    return pares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const retornaPar = (n) => {
        if (n % 2 === 0) {
            return n;
        }
    };

    const pares = array.filter(retornaPar);

    return pares.map((n) => n ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce((a, b) => Math.max(a, b));
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(a, b);
    const menorNumero = Math.min(a, b);
    const verificarDivisibilidade = (maiorNumero, menorNumero) => {
        if (maiorNumero % menorNumero === 0) {
            return true;
        } else {
            return false;
        }
    };
    const maiorDivisivelPorMenor = verificarDivisibilidade(
        maiorNumero,
        menorNumero
    );

    const diferenca = maiorNumero - menorNumero;

    const objeto = {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca,
    };

    console.log(objeto);

    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const array = [0];

    for (let i = array.length - 1; array.length < n; i++) {
        let array = [0];
        m = array[i] + 2;
        array.push(m);
    }
    return array.length;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoaAnonimizada = { ...pessoa };
    pessoaAnonimizada.nome = 'ANÔNIMO';

    return pessoaAnonimizada;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    selecao = (pessoa) => {
        if (pessoa.idade > 14 && pessoa.idade < 60) {
            if (pessoa.altura >= 1.5) {
                return true;
            } else {
                return false;
            }
        }
    };

    pessoasAutorizadas = pessoas.filter(selecao);

    return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    selecao = (pessoa) => {
        if (pessoa.idade <= 14) {
            return true;
        } else if (pessoa.idade >= 60) {
            return true;
        } else if (pessoa.altura < 1.5) {
            return true;
        } else {
            return false;
        }
    };

    const pessoasNaoAutorizadas = pessoas.filter(selecao);
    return pessoasNaoAutorizadas;

    pessoasNaoAutorizadas = pessoas.filter(selecao);

    return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const atualizarSaldo = (contas) => {
        let comprasSoma = 0;

        for (let i = 0; i < contas.compras; i++) {
            comprasSoma = contas.compras[i] + comprasSoma;
        }

        contas.compras = [];

        contas.saldoTotal = contas.saldoTotal - comprasSoma;

        return contas
    };

    return contas.map(atualizarSaldo)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
