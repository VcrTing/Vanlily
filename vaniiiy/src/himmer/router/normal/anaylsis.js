import analysis from '../../../screen/analysis/analysis.vue'

export default (head) => {
    return [
        {
            path: head + '/',
            component: analysis,
            children: [ ]
        },
    ]
}