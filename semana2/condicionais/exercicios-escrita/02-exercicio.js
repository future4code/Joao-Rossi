const periodoEstudo = prompt (`Olá, qual o período que você estuda?
Se estudar na manhã, você é do período matutino. Digite M;
Se estudar à tarde, você é do período vespertino. Digite V;
Se você estua a noite, você é do período noturno. Digite N;`)

const verificarPeriodo = (periodo) => {
    if (periodo === 'M') {
        console.log (`Bom-dia!`)
    } else if (periodo === 'V') {
        console.log (`Boa tarde!`)
    } else if (periodo === 'N') {
        console.log (`Boa noite!`)
    } else {
        console.log (`Por favor, digite "M" se você estuda de manhã, "V" se você estuda à tarde, ou "N" se você estuda à noite.`)
    }
}

verificarPeriodo(periodoEstudo.toUpperCase())