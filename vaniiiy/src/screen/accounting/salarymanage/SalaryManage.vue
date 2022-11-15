<template>
<div>
    <layout-cont class="pt-0" v-if="!son" :_class="'pt_x2'">

        <template v-slot:filter>
            <salarymanage-top-filter />
        </template>

        <template v-slot:opera>
            <nav>
                <button class="btn-pri_out btn-input px_x3">员工录入</button>
                <span class="px_s"></span>
                <button @click="go('/admin/accounting/salarymanage/acc_form_salary')" class="btn-pri btn-input px_x3">新增工资管理</button>
            </nav>
        </template>

        <template v-slot:cont>
            <div>
                <nav class="table">
                    <salary-manage-tr></salary-manage-tr>
                    <collapse>
                        <collapse-td-item v-for="(v, i) in many" :key="i">
                            <template v-slot:tit>
                                <salary-manage-td :one="v"/>
                            </template>
                            <template v-slot:cont>
                                <salarymanage-expanel/>
                            </template>
                        </collapse-td-item>
                    </collapse>
                </nav>

                <pagenation class="py"></pagenation>
            </div>
        </template>
    </layout-cont>
    <router-view/>
</div>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import SalarymanageExpanel from './expan/SalarymanageExpanel.vue'
import SalaryManageTd from './table/SalaryManageTd.vue'
import SalaryManageTr from './table/SalaryManageTr.vue'
import SalarymanageTopFilter from './top/SalarymanageTopFilter.vue'
export default {
  components: { LayoutCont, SalarymanageTopFilter, SalaryManageTr,
    Collapse, CollapseTdItem, SalaryManageTd, SalarymanageExpanel
    ,Pagenation       },
    data() {
        return {
            many: [
                {
                    id: 1, tit: '12月份月结', num: 24,
                    salary: '366666', date: '2022-12-23 12:23'
                },
                {
                    id: 2, tit: '2022年奖金', num: 21,
                    salary: '99999999999', date: '2022-01-23 12:23'
                },
                {
                    id: 3, tit: '2021年奖金', num: 22,
                    salary: '19999999999', date: '2022-01-23 12:23'
                },
                {
                    id: 4, tit: '2021年奖金', num: 21,
                    salary: '200', date: '2022-01-23 12:23'
                },
            ]
        }
    },
    computed: {
        son() { let src = this.$route.path.split('salarymanage').filter(e => (e != '' && e != '/')); return src.length > 1 }  
    },
    mounted() { console.log('SON =', this.$route.path.split('salarymanage').filter(e => e != '')) },
    methods: {
        mod(num) { this.pina().modai( num ) }
    }
}
</script>

<style>

</style>