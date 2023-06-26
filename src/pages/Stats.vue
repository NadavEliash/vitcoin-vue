<template>
  <main class="statistics">
    <div class="headline" v-if="exchangeRate" @click="onReverseExchange">Exchange rate: USD$ {{
      exchangeRate.dolar.toLocaleString() }} =
      <img src="https://cdn-icons-png.flaticon.com/512/991/991959.png" alt="bitcoin" /> {{ exchangeRate.bitcoin }}
      <img class="reverse" src="https://www.svgrepo.com/show/360701/refresh-reverse.svg" alt="reverse">
    </div>
    <Charts />
  </main>
</template>

<script>
import Charts from '@/cmps/Charts.vue'
import { bitcoinService } from '../services/bitcoinService';

export default {
  components: {
    Charts
  },
  data() {
    return {
      exchangeRate: null
    }
  },
  methods: {
    onReverseExchange() {
      if (this.exchangeRate.dolar > 1) {
        this.exchangeRate = {
          bitcoin: 1 / this.exchangeRate.dolar,
          dolar: 1
        }
      } else {
        this.exchangeRate = {
          dolar: (1 / this.exchangeRate.bitcoin),
          bitcoin: 1
        }
      }
    }
  },
  async mounted() {
    const rate = await bitcoinService.getRate()
    this.exchangeRate = {
      bitcoin: rate,
      dolar: 1
    }
  }
}
</script>

<style lang="scss">
.statistics {

  .headline {
    width: 60%;
    position: relative;
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
    margin-block: 2rem;
    cursor: pointer;
    caret-color: transparent;

    img {
      width: 40px;
      filter: invert(1);
      translate: 0 15%;
    }

    .reverse {
      position: absolute;
      top: .5rem;
      right: -1rem;
    }
  }
}
</style>