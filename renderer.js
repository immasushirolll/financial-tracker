console.log("renderer loaded");

window.addEventListener("DOMContentLoaded", () => {
    const name_input = document.getElementById("name_test");
    const portfolio_input = document.getElementById("portfolio_test");
    const buy_sell_input = document.getElementById("buy/sell_test");
    const amount_input = document.getElementById("amount");
    const price_input = document.getElementById("price");
    const finalbuyprice_input = document.getElementById("finalbuyprice");
    const stockcode_input = document.getElementById("stockcode");
    const button = document.getElementById("write");
    console.log(button);


    button.addEventListener("click", () => {

        const data = {
            Name: name_input.options[name_input.selectedIndex].text,
            Portfolio: portfolio_input.options[portfolio_input.selectedIndex].text,
            BuySell: buy_sell_input.options[buy_sell_input.selectedIndex].value,
            Amount: Number(amount_input.value),
            Price: Number(price_input.value),
            FinalBuyPrice: Number(finalbuyprice_input.value),
            StockCode: stockcode_input.value.trim()
        };

        window.electronAPI.saveToJSON(data);
    });

    const routebutton = document.getElementById("router");
    routebutton.addEventListener("click", () => {
        console.log("button clicked");
        window.electronAPI.router('transactions.html')
    });
});