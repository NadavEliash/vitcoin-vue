<template>
    <div v-if="loaded">
        <div class="toggle-charts" @click="toggleCharts">
            <div :class="showMarket ? 'marked left' : 'marked right'"></div>
            <span>Market Price</span><span>Block size</span>
        </div>
        <Line v-if="showMarket" id="my-chart-id" :options="chartOptions" :data="chartData" />
        <Line v-if="!showMarket" id="block-size-chart-id" :options="chartOptions" :data="blockChartData" />
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

import { bitcoinService } from '@/services/bitcoinService.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

export default {
    name: 'LineChart',
    components: { Line },

    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{ data: [] }]
            },
            blockChartData: {
                labels: [],
                datasets: [{ data: [] }]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 5,
                            boxHeight: 5,
                            color: 'white',
                            font: {
                                size: 20,
                                weight: 600,
                            }
                        }
                    }
                }
            },
            loaded: false,
            showMarket: true
        }
    },
    methods: {
        toggleCharts() {
            this.showMarket = !this.showMarket
        }
    },
    async created() {
        try {
            const marketData = await bitcoinService.getMarketPriceHistory()
            this.chartData = {
                labels: marketData.dates,
                datasets: [{
                    label: 'Market price (USD)',
                    data: marketData.prices,
                    borderColor: 'rgba(255, 50, 50, .5)',
                    borderWidth: 3,
                    pointRadius: 2,
                }]
            }
        } catch (err) {
            console.error(err)
        }
        this.loaded = true
    },
    async mounted() {
        try {
            const blockData = await bitcoinService.getAvgBlockSize()
            this.blockChartData = {
                labels: blockData.dates,
                datasets: [{
                    label: 'Average Block Size (MB)',
                    data: blockData.avgSize,
                    borderColor: 'rgba(255, 50, 50, .5)',
                    borderWidth: 3,
                    pointRadius: 2,
                }]
            }
        } catch (err) {
            console.error(err)
        }
    }

}
</script>

<style lang="scss">
.toggle-charts {
    position: relative;
    width: 30%;
    min-width: 300px;
    height: 33px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 3rem;
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1.5rem;
    cursor: pointer;

    .marked {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.4);
        height: 100%;
        border-radius: 3rem;
        transition: .5s;

        &.left {
            left: 0;
            width: 53%;
        }

        &.right {
            left: 100%;
            translate: -100%;
            width: 48%;
        }
    }
}
</style>