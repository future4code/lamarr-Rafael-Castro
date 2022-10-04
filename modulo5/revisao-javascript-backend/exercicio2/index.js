let customers = [
    { id: 1, nome: "Fulano" },
    { id: 2, nome: "Ciclano" },
    { id: 3, nome: "Beltrano" },
    { id: 4, nome: "Fulana" }
]

let newCustomer = {id: 5, nome: "Epaminondas"}

const addCustomer = (customerList, newCustomer) => {

    if (typeof newCustomer.id === 'number') {
        customerList.forEach(element => {
            element.id === newCustomer.id
        });
    }

    customerList.push(newCustomer)
    console.log(customerList)
}



addCustomer(customers, newCustomer)