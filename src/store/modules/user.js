import { userService } from "../../services/userService"

export default {
    strict: true,
    state() {
        return {
            user: null
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async signupUser(context, { user }) {
            userService.save(user)
            context.commit({ type: 'setUser', user })
        },
        loginUser(context, { user }) {
            context.commit({ type: 'setUser', user })
        },
        logout(context) {
            context.commit({ type: 'setUser', user: null })
        },
        async setTransaction(context, { transaction }) {
            const balance = context.state.user.balance - transaction.amount
            const updatedUser = { ...context.state.user, balance, transactions: [transaction, ...context.state.user.transactions] }
            context.commit({ type: 'setUser', user: updatedUser })
            userService.save(updatedUser)
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    }
}