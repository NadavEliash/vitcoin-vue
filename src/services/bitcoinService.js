import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return rate
}

async function getMarketPriceHistory() {
    const marketPriceHistory = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return marketPriceHistory
}

async function getAvgBlockSize() {
    const avgBlockSize = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
    return avgBlockSize
}