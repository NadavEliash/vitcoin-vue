import { storageService } from "./async-storage.service"

const USER_KEY = 'vitcoinUser'
const LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    getLoggedinUser,
    saveLoggedinUser,
    save,
    getUser,
    getEmptyUser
}

function getLoggedinUser() {
    const user = sessionStorage.getItem(LOGGEDIN_USER)
    if (!user) return null
    return JSON.parse(user)
}

function saveLoggedinUser(user) {
    const userStr = JSON.stringify(user)
    sessionStorage.setItem(LOGGEDIN_USER, userStr)
}

function save(user) {
    user._id ? storageService.put(USER_KEY, user) : storageService.post(USER_KEY, user)
    saveLoggedinUser(user)
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