import axios from "axios"
import { storageService } from "./async-storage.service"

const MARKET_HISTORY_KEY = 'marketHistoryDB'

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
    let marketPriceHistory = await storageService.query(MARKET_HISTORY_KEY)
    if (!marketPriceHistory.length) {
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        marketPriceHistory = res.data.values
        storageService.save(MARKET_HISTORY_KEY, marketPriceHistory)
    }

    const dates = marketPriceHistory.map(item => {
        const roughDate = new Date(item.x * 1000)
        const month = roughDate.getMonth() + 1
        const day = roughDate.getDate()
        return `${day}/${month}`
    })

    const prices = marketPriceHistory.map(item => {
        const price = item.y
        return price
    })

    return ({dates, prices})
}

async function getAvgBlockSize() {
    const avgBlockSize = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
    return avgBlockSize
}