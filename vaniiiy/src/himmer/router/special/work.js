import work from '../../../screen/work/work.vue'
import WorkMain from '../../../screen/work/main/WorkMain.vue'

export default (head = '') => {
    return [
        {
            path: head,
            component: work,
            redirect: head + '/board',
            children: [
                {
                    path: head + '/board',
                    component: WorkMain
                }
            ]
        }
    ]
}