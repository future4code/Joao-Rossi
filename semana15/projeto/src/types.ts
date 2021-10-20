// * Criando o type Transaction:
export type Transaction = {
    value: number,
    date: Date,
    description: string,
}

// * Criando o type Account
export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Transaction[]
}