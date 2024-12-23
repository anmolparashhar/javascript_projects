const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

const apiURLWithCors = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
const corsProxy = "https://api.allorigins.win/get?url=";

const apiURL = corsProxy + encodeURIComponent(apiURLWithCors);

async function fetchCryptoPrices() {
    console.log("fetching");
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const prices = JSON.parse(data.contents);

        btc.textContent = `$${prices.bitcoin.usd}`;
        eth.textContent = `$${prices.ethereum.usd}`;
        doge.textContent = `$${prices.dogecoin.usd}`;
    } catch (error) {
        console.error("Failed to fetch cryptocurrency prices:", error);
        btc.textContent = "Error";
        eth.textContent = "Error";
        doge.textContent = "Error";
    }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);

