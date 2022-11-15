import Widget from '../../../screen/widget/Widget.vue'

export default (head = '') => {
    return [
        {
            path: '/widget',
            component: Widget,
        }
    ]
}