import OrderView from "../../../screen/order/view/OrderView.vue"

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
            path: head + '/edit_order',
            component: OrderEdit,
            children: [ ]
        },
        {
            path: head,
            component: OrderView
        }
    ]
}