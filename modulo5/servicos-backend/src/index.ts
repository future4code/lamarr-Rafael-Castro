import { Request, Response } from "express"
import app from "./app"
import axios from 'axios'
import { connection } from "./data/connection"
import transporter from "./services/mailTransporter"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

// Exercício 1
const getAddress = async (cep: string) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return {
        "Logradouro": `${data.logradouro}`,
        "Bairro": `${data.bairro}`,
        "Cidade": `${data.localidade}`,
        "Estado": `${data.uf}`
    }
}



// Exercício 2
// src/data/migrations.ts



// Exercício 3
const addressToDb = async (cep: string, numero: string, complemento: string) => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    connection("AddressInfo")
        .insert({
            Cep: `${cep}`,
            Logradouro: `${data.logradouro}`,
            Numero: `${numero}`,
            Complemento: `${complemento}`,
            Bairro: `${data.bairro}`,
            Cidade: `${data.localidade}`,
            Estado: `${data.uf}`
        })
        .then(() => { console.log('Dados adicionados a tabela.') })
        .catch(printError)
}

app.post("/address", (req:Request, res: Response) => {
    let {cep, numero, complemento } = req.body

    if (!cep || !numero) {
        res.status(400).send("Informe Cep e numero.")
    }
    if (!complemento) {
        complemento = "Não informado"
    }
    addressToDb(cep, numero, complemento)
})



// Exercício complementar
const sendEmail = async () => {
    const email = "projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com"
    transporter.sendMail({
        from: process.env.NODEMAILER_USER,
        to: [email],
        subject: "[LAMARR - Rafael Castro]",
        text: "Esse é um email de confirmação do exercício complementar."
    })
    .then(()=>{console.log('Email enviado.')})
    .catch(printError)
}
// sendEmail()