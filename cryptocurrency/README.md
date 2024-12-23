# Cryptocurrency Website

## Overview
A dynamic cryptocurrency website that includes:
- Real-time prices for Bitcoin, Ethereum, and Dogecoin.
- Latest cryptocurrency news fetched dynamically.
- A "Coming Soon" page with a countdown timer.
- Reusable navigation bar across pages.

## Features
1. **Real-Time Prices**  
   - Displays live prices for Bitcoin, Ethereum, and Dogecoin using the [CoinGecko API](https://www.coingecko.com/).  
   - Prices refresh every 60 seconds.

2. **Latest News**  
   - Fetches cryptocurrency-related news using the [NewsAPI](https://newsapi.org/).  
   - Filters and displays articles with valid descriptions.

3. **Coming Soon Countdown**  
   - Countdown timer for a launch event.  
   - Launch Date: January 1, 2025.  
   - Displays "We're Live!" after the countdown ends.

4. **Modular Navigation**  
   - Reusable navbar loaded dynamically on all pages.

## Installation
1. Clone or download the repository.
2. Replace the placeholder NewsAPI key in `news.js` with your own [NewsAPI key](https://newsapi.org/).
3. Open the `index.html` file in a browser to get started.

## Customization
- **Update the Launch Date**: Edit `launchDate` in `coming_soon.js`.  
- **Add More Coins**: Add new `<div>`s in the `coin-list` section of `index.html` and update `script.js` with the new coin IDs from CoinGecko.  
- **Change Design**: Edit `style.css` to customize the website's appearance.

## Dependencies 
- **APIs**:  
  - [CoinGecko API](https://www.coingecko.com/) for cryptocurrency prices.  
  - [NewsAPI](https://newsapi.org/) for cryptocurrency news.  
- **CORS Proxy**: [AllOrigins](https://api.allorigins.win) to bypass CORS restrictions.

## Known Issues
- **CORS Proxy Downtime**: Replace `AllOrigins` with an alternative or self-hosted proxy if needed.  
- **NewsAPI Free Tier Limits**: The free tier may limit requests per day.

## License
This project is open-source and free for educational or personal use.