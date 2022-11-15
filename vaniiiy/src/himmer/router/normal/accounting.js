import accounting from "../../../screen/accounting/accounting.vue"

import ConsumeView from '../../../screen/accounting/consume/ConsumeView.vue'
import ContrastView from '../../../screen/accounting/contrast/ContrastView.vue'

import ProduCenter from '../../../screen/accounting/producenter/ProduCenter.vue'
import ProInventoryView from '../../../screen/accounting/producenter/inventory/ProInventoryView.vue'

import StaffManage from '../../../screen/accounting/staffmanage/StaffManage.vue'

import SalaryManage from '../../../screen/accounting/salarymanage/SalaryManage.vue'
import AccFormSalaryManage from '../../../screen/accounting_form/salarymanage/AccFormSalaryManage.vue'

import MaterialView from '../../../screen/accounting/material/MaterialView.vue'
import MaterialReview from '../../../screen/accounting/material/view/MaterialReview.vue'
import MaterialCreat from '../../../screen/accounting/material/creat/MaterialCreat.vue'
import MaterialEdit from '../../../screen/accounting/material/edit/MaterialEdit.vue'

export default (head) => {
    return [
        {
            path: head,
            component: accounting,
            redirect: head + '/consume',
            children: [
                {
                    path: head + '/consume',
                    component: ConsumeView,
                },
                {
                    path: head + '/contrast',
                    component: ContrastView,
                },
                {
                    path: head + '/material',
                    component: MaterialView,
                },
                {
                    path: head + '/material/material_create',
                    component: MaterialCreat
                },
                {
                    path: head + '/material/edit',
                    component: MaterialEdit
                },
                {
                    path: head + '/material/review',
                    component: MaterialReview
                },

                {
                    path: head + '/staffmanage',
                    component: StaffManage,
                },
                {
                    path: head + '/salarymanage',
                    component: SalaryManage,
                    children: [
                        {
                            path: head + '/salarymanage/acc_form_salary',
                            component: AccFormSalaryManage
                        }
                    ]
                },

                {
                    path: head + '/producenter',
                    component: ProduCenter,
                    children: [
                        {
                            path: head + '/producenter/inventory',
                            component: ProInventoryView
                        }
                    ]
                }
            ]
        }
    ]
}