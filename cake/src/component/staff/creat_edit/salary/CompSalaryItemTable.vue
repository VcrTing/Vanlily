<template>
    <div class="">
        <nav class="table table-witty">
            <comp-salary-item-tr></comp-salary-item-tr>
            <comp-salary-item-td
                v-for="(v, i) in many" :key="i"
                :one="v"
            ></comp-salary-item-td>

            <ui-table-in-form-wrapper @open="change(true)" :_mode="cev" :_plus="plus" :_text="'添加员工信息'">
                <comp-salary-item-form @close="change(false)"></comp-salary-item-form>
            </ui-table-in-form-wrapper>
        </nav>

        <pagenation v-if="mode <= 0" class="pt_x2 pb" :_big="false" :count="30" :_limit="10"></pagenation>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import UiTableInFormWrapper from '../../../../funcks/ui_element/table/tdin/UiTableInFormWrapper.vue'
import CompSalaryItemForm from './form/CompSalaryItemForm.vue'
import CompSalaryItemTd from './table/CompSalaryItemTd.vue'
import CompSalaryItemTr from './table/CompSalaryItemTr.vue'
export default {
  components: { CompSalaryItemTr, CompSalaryItemTd, Pagenation, UiTableInFormWrapper, CompSalaryItemForm }, 
    props: {
        mode: {
            type: Number,
            default: 1
            // 1 = PLUS, 2 = EDIT, 0 = VIEW
        }
    },
    mounted() {  },
    computed: {
        cev() {
            let res = 'VIEW'
            if( this.mode == 1) { res = 'PLUS' }
            return this.mode > 1 ? 'EDIT': res
        }
    },
    data() { return {
        plus: true,
        many: [ 
            {
                named: '风雪', part: '销售部', duty: '送水',
                day_need: 22, day_qj: 2, day_work: 20,
                salary_base: 14800, jj: 400, bad_cost: 0,
                jb_day: 1, jb_salary: 400, other: 0,
                salary: 14400
            },
            {
                named: '欧阳妹妹', part: '公关部', duty: '前台',
                day_need: 22, day_qj: 2, day_work: 20,
                salary_base: 12800, jj: 400, bad_cost: 0,
                jb_day: 0, jb_salary: 0, other: 0,
                salary: 12400000
            },
        ]
    } },
    methods: {
        change(f) { this.plus = f }
    }
}
</script>

<style>

</style>