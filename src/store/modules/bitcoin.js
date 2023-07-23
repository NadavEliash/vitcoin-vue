import { bitcoinService } from "../../services/bitcoinService"

export default {
    strict: true,
    state() {
        return {
            rate: null
        }
    },
    mutations: {
        setRate(state, { rate }) {
            state.rate = rate
        }
    },
    actions: {
        async loadRate(context) {
            const rate = await bitcoinService.getRate()
            context.commit({ type: 'setRate', rate })
        }
    },
    getters: {
        rate(state) {
            return state.rate
        }
    }
}