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
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    }
}