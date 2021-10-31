## Exercício 1:
**a)**
A resposta seria a esperada de uma query feita diretamente num cliente para MySQL: uma relação com os atores. Porém, se diferenciaria na questão que iria vir um array com outros dois arrays. 

**b)**

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
}

**c)**

