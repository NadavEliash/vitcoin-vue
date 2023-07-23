import { createStore } from "vuex"

import contact from './modules/contact.js'
import user from './modules/user.js'
import bitcoin from './modules/bitcoin.js'

const storeOptions = {
    strict: true,
    modules: {
        contact,
        user,
        bitcoin
    }
}

const store = createStore(storeOptions)
export default store