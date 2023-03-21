import Dashboard from '../../../screen/home/dashboard/Dashboard.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: Dashboard,
        }
    ]
}