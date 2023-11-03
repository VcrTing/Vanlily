<template>
    <layout-cont :_class="'pt_x2'">
        
        <template v-slot:filter>
            <staffmanage-top-filter/>
        </template>

        <template v-slot:opera>
            <nav>
                <button class="btn-pri_out btn-input px_x3">工資管理</button>
                <span class="px_s"></span>
                <button @click="mod(111)" class="btn-pri btn-input px_x3">新增員工</button>
            </nav>
        </template>

        <template v-slot:cont>
            <div>
                
                <nav class="table">
                    <staff-manage-tr></staff-manage-tr>
                    <ui-page-empty :srcs="staffs">
                        <collapse>
                            <collapse-td-item v-for="(v, i) in staffs" :key="i">
                                <template v-slot:tit>
                                    <staff-manage-td :one="v"/>
                                </template>
                            </collapse-td-item>
                        </collapse>
                    </ui-page-empty>
                </nav>

                <pagenation class="py_x2"></pagenation>
                <modal-staff ref="modREF"></modal-staff>
            </div>
        </template>
    </layout-cont>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import ModalStaff from './comm/ModalStaff.vue'
import StaffManageTd from './table/StaffManageTd.vue'
import StaffManageTr from './table/StaffManageTr.vue'
import StaffmanageTopFilter from './top/StaffmanageTopFilter.vue'
export default {
  components: { LayoutCont, StaffManageTr, StaffmanageTopFilter, Collapse, UiPageEmpty, CollapseTdItem, StaffManageTd, ModalStaff, Pagenation },
    data() {
        return {
            staffs: [
                {
                    named: 'Lucy Candy', number: 'AF 001', depart: { named: '市场' }, position: { named: '销售员' }, email: 'lucacds@123.com', phoned: '9288 9777', bank: { number: '28887 98978 71823 767' }, money: 88872
                },
                {
                    named: '梨花 Ma', number: 'AF 002', depart: { named: '市场' }, position: { named: '销售员' }, email: 'lihuamazijie@123.com', phoned: '9288 9777', bank: { number: '18887 98913 4182 767A' }, money: 28872
                },
                {
                    named: '张虎儿', number: 'AF 003', depart: { named: '市场' }, position: { named: '销售员' }, email: 'lihuamazijie@123.com', phoned: '9288 9777', bank: { number: '18887 98913 4182 767A' }, money: 28872
                },
                {
                    named: '刘夕', number: 'AF 004', depart: { named: '市场' }, position: { named: '销售员' }, email: 'lihuamazijie@123.com', phoned: '9288 9777', bank: { number: '18887 98913 4182 767A' }, money: 28872
                },
                {
                    named: 'Alice Student', number: 'AF 005', depart: { named: '市场' }, position: { named: '销售员' }, email: 'lihuamazijie@123.com', phoned: '9288 9777', bank: { number: '18887 98913 4182 767A' }, money: 28872
                },
            ]
        }
    },
    computed: { 
        // staffs() { return this.pina().staffs }
    },
    methods: {
    }
}
</script>