
// Cotacao moedas dia

const USD = 4.87
const EUR = 4.32
const GBP = 6.08
const ARS = 0.09


const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros.

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex,"")
    
})


// ou form.onsubmit = () => {}
// Captando o evento de submit do formulario

form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        case "ARS":
            convertCurrency(amount.value, ARS, "ARS$")
    
    }

})

// Funcao para converter a moeda

function convertCurrency(amount, price, symbol) {
    // Aplica a classe que exibe o footer para mostrar o resultado.
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total)}`
        footer.classList.add("show-result")
        

    } catch (error) {
        console.log(error)
        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        alert("Nao foi possivel converter, tente novamente mais tarde.")
        
    }

}

function formatCurrencyBRL (value) {
    // Converte para o numero para utilizar o toLocaleString para formatar no padrao BRL.
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}