import order from "../../../screen/order/order.vue"
import OrderView from "../../../screen/order/view/OrderView.vue"
import OrderViewSource from "../../../screen/order/view/source/OrderViewSource.vue"

import OrderCreat from '../../../screen/order/creat_edit/OrderCreat.vue'
import OrderEdit from '../../../screen/order/creat_edit/OrderEdit.vue'

export default (head) => {
    return [
        {
            path: head + '/add_order',
            component: OrderCreat,
            children: [ ]
        },
        {
            path: head + 'edit_order',
            component: OrderEdit,
            children: [ ]
        },
        {
            path: head,
            component: order,
            redirect: head + '/view',
            children: [
                {
                    path: head + '/view',
                    component: OrderView,
                    redirect: head + '/view/query',
                    children: [
                        {
                            path: head + '/view/query',
                            component: OrderViewSource
                        }
                    ]
                }
            ]
        }
    ]
}