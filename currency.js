
document.addEventListener("DOMContentLoaded",() => {
    document.querySelector("form").onsubmit = () => {
        const base = document.querySelector("#local_currency").value;
        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then((response) => response.json())
            .then((data) => {
                const amount = document.querySelector("#amount").value;
                const foreignCurrency=
                    document.querySelector("#foreign_currency").value;
                const rate = data.rates[foreignCurrency];
                function convert(){
                    return amount * rate;
                }
                document.querySelector(
                "#results"
                ).innerHTML = `${amount} ${base.toUpperCase()} equal to ${foreignCurrency} ${convert().toFixed(
                2
                )}`;
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
        return false;
    };
});