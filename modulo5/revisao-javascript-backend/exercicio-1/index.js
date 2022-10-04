const convertCelsius = (temp, convertTo) => {
    if (typeof temp === 'number') {
        if (convertTo.toUpperCase() === 'F') {
            console.log(`${temp}° Celsius é equivalente a ${temp * 1.8 + 32}° Farenheit.`)
        } else if (convertTo.toUpperCase() === 'K') {
            console.log(`${temp}° Celsius é equivalente a ${temp + 273.15}° Kelvin.`)
        } else {
            console.log('Erro. Escolha "F" para Farenheit ou "K" para Kelvin.')
        }
    } else {
        console.log('Erro. Informe um valor numérico para a temperatura.')
    }
}

convertCelsius(0, 'k')