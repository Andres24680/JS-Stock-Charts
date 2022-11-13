async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=30min&apikey=6a30597a905b4c8c8e75c5002b6e3b8f

//api key== 6a30597a905b4c8c8e75c5002b6e3b8f

let stocksResults =await stockResults.json()
console.log(stocksResults)
main()