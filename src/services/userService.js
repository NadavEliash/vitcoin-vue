import { storageService } from "./async-storage.service"

const USER_KEY = 'cryptoUserDB'

export const userService = {
    save,
    getUser,
    getEmptyUser
}

function save(user) {
    storageService.post(USER_KEY, user)
}

function getUser(userId) {
    storageService.get(USER_KEY, userId)
}

function getEmptyUser() {
    return {
        name: '',
        password: '',
        balance: 100,
        transactions: []
    }
}