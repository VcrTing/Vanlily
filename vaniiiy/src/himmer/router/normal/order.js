import order from "../../../screen/order/order.vue"
import OrderView from "../../../screen/order/view/OrderView.vue"
import OrderViewSource from "../../../screen/order/view/source/OrderViewSource.vue"

import OrderCrestEdit from '../../../screen/order/creat_edit/OrderCreatEdit.vue'

export default (head) => {
    return [
        {
            path: head + '/add_order',
            component: OrderCrestEdit,
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