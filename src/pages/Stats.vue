<template>
  <main class="statistics">
    <!-- <div class="exchange-box">
      <h1>Exchange rate:</h1>
      <div class="rate" v-if="exchangeRate" @click="onReverseExchange">
        <span class="dolar">USD$ {{ exchangeRate.dolar.toLocaleString() }} </span> =
        <span class="bitcoin">
          <img src="https://cdn-icons-png.flaticon.com/512/991/991959.png" alt="bitcoin" />
          {{ exchangeRate.bitcoin }}
        </span>
        <img class="reverse" src="https://www.svgrepo.com/show/360701/refresh-reverse.svg" alt="reverse">
      </div>
    </div> -->
    <Charts class="charts" />
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

  .exchange-box {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 600px;
    margin-block: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1rem;
    padding-top: .5rem;
    border-radius: 1rem;
    text-indent: 1rem;
    line-height: 4rem;

    h1 {
      display: inline;
      font-size: 2rem;
      color: white;
      font-weight: 600;
    }

    @media(min-width: 1200px) {
      width: 350px;
      margin-left: auto;
      margin-right: 3rem;
      display: block;
      margin-bottom: -5rem;

      h1 {
        margin-bottom: 1rem;
      }
    }


    .rate {
      font-size: 1.5rem;
      color: white;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 30px;
        filter: invert(1);
        translate: 0 20%;
      }

      .reverse {
        position: absolute;
        top: 1.5rem;
        right: 1rem;
      }
    }
  }

  .charts {
    margin-top: 8vh;
    margin-inline: auto;
    width: 80vw;
    max-width: 1200px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 1rem;

    @media(min-width: 1200px) {
      margin-inline: auto;
    }
  }
}
</style>