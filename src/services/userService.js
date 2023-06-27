import { storageService } from "./async-storage.service"

const USER_KEY = 'cryptoUserDB'

export const userService = {
    save,
    getUser,
    getEmptyUser
}

function save(user) {
    user._id? storageService.put(USER_KEY, user) : storageService.post(USER_KEY, user)
}

async function getUser(userName) {
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user.name === userName)
    return user
}

function getEmptyUser() {
    return {
        name: '',
        password: '',
        balance: 100,
        transactions: []
    }
}