import Login from '../../../screen/auth/login/Login.vue'

export default (head = '') => {
    return [
        {
            path: '/login',
            component: Login,
        }
    ]
}