<template>
    <layout-cont :_class="'pt_x2'" :_collapse="exp">
        <template v-slot:filter>
            <consume-top-filter @submit="subFit"/>
        </template>

        <template v-slot:opera>
            <button @click="modei(110)" class="btn-pri btn-input px_x3">新增支出</button>
        </template>

        <template v-slot:center>
            <consume-center-card :funn="funnel"></consume-center-card>
        </template>

        <template v-slot:cont>
            <div>
                <nav class="table">
                    <consume-tr></consume-tr>
                    <collapse>
                        <collapse-td-item v-for="(v, i) in consumes" :key="i" >

                            <template v-slot:tit>
                                <consume-td :one="v"/>
                            </template>
                            <template v-slot:cont>
                                <div>
                                    &nbsp;
                                </div>
                            </template>

                        </collapse-td-item>
                    </collapse>
                </nav>

                <pagenation class="py_x2"></pagenation>

                <modal-consume ref="modREF"></modal-consume>
            </div>
        </template>
    </layout-cont>
</template>

<script>
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import ModalConsume from './comm/ModalConsume.vue'
import ConsumeTd from './table/ConsumeTd.vue'
import ConsumeTr from './table/ConsumeTr.vue'
import ConsumeCenterCard from './top/ConsumeCenterCard.vue'
import ConsumeTopFilter from './top/ConsumeTopFilter.vue'
export default {
  components: { LayoutCont, ConsumeTopFilter, ConsumeTr, CollapseTdItem, ConsumeTd,
    Collapse, Pagenation, ModalConsume, ConsumeCenterCard },
    data() {
        return {
            funnel: {}
        }
    },
    computed: {
        exp() {
            let res = false
            if (this.funnel.named || this.funnel.end) { res = true }
            return res
        },
        consumes() { return [
                { is_new: true, number: 'PAY-202212EOF', date: '2022-12-12', content: '这是产品内容', typed: '坏货补偿', unit: 'HKD', money: 3398, pdf: { named: '公司支出_01.pdf' } },
                { is_new: true, number: 'PAY-202212EOF', date: '2022-12-12', content: '这是产品内容 2', typed: '交通', unit: 'HKD', money: 3398, pdf: { named: '公司支出_02.pdf' } },
                { is_new: false, number: 'PAY-202212EOF', date: '2022-11-12', content: '这是产品内容 3', typed: '交通', unit: 'HKD', money: 13398, pdf: { named: '公司支出_03.pdf' } },
                { is_new: false, number: 'PAY-202212EOF', date: '2022-11-02', content: '这是产品内容 4', typed: '交通', unit: 'HKD', money: 398, pdf: { named: '公司支出_04.pdf' } },
                { is_new: false, number: 'PAY-202212EOF', date: '2022-11-01', content: '这是产品内容 5', typed: '工资发放', unit: 'HKD', money: 9398, pdf: { named: '公司支出_05.pdf' } }
            ] }
    },
    methods: {
        modei(num) { this.pina().modai( num ); this.funnel = {} },
        subFit(funn) { this.funnel = funn; console.log('FUNN =', funn) }
    }
}
</script>

<style>

</style>