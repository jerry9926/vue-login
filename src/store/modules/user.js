/**
 * 描述：uesr信息
 * 作者：jerry9926
 * 时间：19.5.25
 */
let info = {}
let hasToken = false

info = {
    "id": "331060737873018880",
    "username": "web",
    "mobilePhone": "",
    "name": "前端大佬",
    "organizationId": "1", // 1
    "organizationName": "可口可乐", // 可口可乐
    "domain": "admin",
    "manageOrgId": "1",
    "divisionList": ["000"]
}


const user = {
    state: {
        token: null,
        info: info,
        hasToken: hasToken,
    },

    mutations: {
        setToken (state, token) {
            debugger
            state.token = token
        },
        updateUser (state) {
            // TODO
            // state.hasToken = webbassdk.Auth.hasToken()
            // state.info = webbassdk.Auth.getUserInfo()
        },
        logout() {
            // TODO
        }
    }
}

export default user
