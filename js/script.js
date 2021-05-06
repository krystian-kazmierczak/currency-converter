{
    const calculateResult = (amount, currency) => {
        const rateUSD = 3.7940;
        const rateEUR = 4.5539;
        const rateCHF = 4.1450;
        const rateGBP = 5.2622;
        const rateTRY = 0.4558;

        switch (currency) {
            case "usd":
                return amount / rateUSD;
            case "eur":
                return amount / rateEUR;
            case "gbp":
                return amount / rateGBP;
            case "chf":
                return amount / rateCHF;
            case "try":
                return amount / rateTRY;
        }
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency.toUpperCase()}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currencyElement = document.querySelector(".js-selectCurrency");
        const amountElement = document.querySelector(".js-amount");
        const currency = currencyElement.value;
        const amount = +amountElement.value;
        const result = calculateResultText(amount, currency);
        updateResult(result, currency);
    }

    const onFormReset = () => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = "";
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    }

    init();
}