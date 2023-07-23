import axios from "axios"
import { storageService } from "./async-storage.service"

const MARKET_HISTORY_KEY = 'marketHistoryDB'
const BLOCK_SIZE_KEY = 'blockSizeDB'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const rate = sessionStorage.getItem('bitcoinRate')
    if (rate) return rate
    else {
        console.log('axios please')
        const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        sessionStorage.setItem('bitcoinRate', res.data)
        return res.data
    }
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
    // .filter((date, idx) => idx % 2 === 0)

    const prices = marketPriceHistory.map(item => {
        const price = item.y
        return price / 1000
    })
    // .filter((date, idx) => idx % 2 === 0)

    return ({ dates, prices })
}

async function getAvgBlockSize() {
    let avgBlockSize = await storageService.query(BLOCK_SIZE_KEY)
    if (!avgBlockSize.length) {
        const res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        avgBlockSize = res.data.values
        storageService.save(BLOCK_SIZE_KEY, avgBlockSize)
    }

    const dates = avgBlockSize.map(item => {
        const roughDate = new Date(item.x * 1000)
        const month = roughDate.getMonth() + 1
        const day = roughDate.getDate()
        return `${day}/${month}`
    })
    .filter((date, idx) => idx % 2 === 0)

    const avgSize = avgBlockSize.map(item => {
        const size = item.y
        return size.toFixed(4)
    })
    .filter((date, idx) => idx % 2 === 0)

    return ({ dates, avgSize })
}