const select = document.querySelector(".js-selectCurrency");
const form = document.querySelector(".js-form");
const textResult = document.querySelector(".js-result");
const input = document.querySelector(".js-input");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    const priceUSD = 3.7978;
    const priseEUR = 4.5481;
    const priceCHF = 4.1279;
    const priceGBP = 5.2235;
    const priceTRY = 0.4716;

    const currency = select.value;
    const rates = input.value;
    let result;
    switch (currency) {
        case "usd":
            result = (rates / priceUSD).toFixed(2);
            textResult.innerText = ` ${result} USD.`
            break;
        case "eur":
            result = (rates / priseEUR).toFixed(2);
            textResult.innerText = ` ${result} EUR.`
            break;
        case "gbp":
            result = (rates / priceGBP).toFixed(2);
            textResult.innerText = ` ${result} GBP.`
            break;
        case "chf":
            result = (rates / priceCHF).toFixed(2);
            textResult.innerText = ` ${result} CHF.`
            break;
        case "try":
            result = (rates / priceTRY).toFixed(2);
            textResult.innerText = ` ${result} TRY.`
            break;
        default:
            textResult.innerText = "Brak kursu waluty";

    }

});

form.addEventListener("reset", () => {
    textResult.innerText = ""
});