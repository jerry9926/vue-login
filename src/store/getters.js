const getters = {
    device: state => state.app.device,
    hasToken: state => state.user.hasToken,
    userInfo: state => state.user.info,
    remember: state => state.user.remember
}
export default getters
