import supervise from '../../../screen/supervise/supervise.vue'

export default (head) => {
    return [
        {
            path: head + '/',
            component: supervise,
            children: [ ]
        },
    ]
}