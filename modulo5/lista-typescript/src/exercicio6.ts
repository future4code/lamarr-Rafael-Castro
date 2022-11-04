type Conta = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}

const contas:Conta[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function checkDebts(array:Conta[]):Conta[]{
    array.map((item) => {
        let sumDebts = item.debitos.reduce((partial, newValue) => partial + newValue, 0)
        item.saldoTotal = item.saldoTotal - sumDebts
        item.debitos = []
    })
    const debtors:Conta[] = array.filter(item => item.saldoTotal < 0)
    return debtors
}

console.log(checkDebts(contas))
