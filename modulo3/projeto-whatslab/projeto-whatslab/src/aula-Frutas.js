import React, { useState } from "react";

function Frutas() {
    const [frutas, setFrutas] = useState(["Batata", "Maçã", "Laranja"])

    const adicionarFruta = () => {
        setFrutas([...frutas, "Abacate"])
    }

    const updateFruta = () => {
        const novaListaDeFrutas = [...frutas]
        novaListaDeFrutas[0] = "Banana"
        setFrutas(novaListaDeFrutas)
    }

    const deleteFrutaFilter = () => {
        const deleteFruta = frutas.filter((fruta) => {
            return fruta != "Batata"
        })

        setFrutas(deleteFruta)
    }

    const deleteFrutaIndex = () => {
        const indice = frutas.findIndex((fruta) => {
            return fruta === "Abacate"
        })

        const novaListaDeFrutas = [...frutas]
        novaListaDeFrutas.splice(indice, 1)
        setFrutas(novaListaDeFrutas)
    }

    const listaDeFrutas = frutas.map((fruta) => {
        return (<p key={fruta}>{fruta}</p>)
    })

    return (
        <>
        {listaDeFrutas}
        <button
            onClick={adicionarFruta}>
                Adicionar
        </button>
        <button
            onClick={updateFruta}>
                Atualizar
        </button>
        <button
            onClick={deleteFrutaFilter}>
                Excluir com filter
        </button>
        <button
            onClick={deleteFrutaIndex}>
                Excluir com Index
        </button>
        </>
    )
}

export default Frutas;