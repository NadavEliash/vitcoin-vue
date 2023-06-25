<template>
    <div v-if="loaded">
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
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
            chartOptions: {
                responsive: true,
            },
            loaded: false
        }
    },

    async mounted() {
        try {
            const marketData = await bitcoinService.getMarketPriceHistory()

            this.chartData = {
                labels: marketData.dates,
                datasets: [{
                    label: 'Market Price (USD)',
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
    }

}
</script>

<style>
</style>