const periodoEstudo = prompt (`Olá, qual o período que você estuda?
Se estudar na manhã, você é do período matutino. Digite M;
Se estudar à tarde, você é do período vespertino. Digite V;
Se você estua a noite, você é do período noturno. Digite N;`)

const verificarPeriodo = (periodo) => {
    switch (periodo) {
        case 'M':
            console.log (`Bom Dia`)
            break;
        case 'V':
            console.log (`Boa Tarde`)
            break;
    
        case 'N':
            console.log (`Boa Noite`)
            break;
    
        default:
            console.log (`Por favor, digite "M" se você estuda de manhã, "V" se você estuda à tarde, ou "N" se você estuda à noite.`)
            break;
    }
}

verificarPeriodo(periodoEstudo.toUpperCase())