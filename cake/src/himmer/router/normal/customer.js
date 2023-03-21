import customer from '../../../screen/customer/customer.vue'
import customer_iist from '../../../screen/customer/iist/customer_iist.vue'

import customer_edit from '../../../screen/customer/edit/customer_edit.vue'

export default (head) => {
    return [
        {
            path: head + '_iist/',
            component: customer_iist,
        },
        {
            path: head + '/',
            component: customer,
            children: [
                {
                    path: head + '/edit',
                    component: customer_edit
                }
            ]
        },
    ]
}