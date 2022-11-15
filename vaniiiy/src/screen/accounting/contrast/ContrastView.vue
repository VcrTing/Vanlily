<template>
    <layout-cont :_class="'w-unf-r_1388 pt_x2'">
        <template v-slot:filter>
            <contrast-top-filter/>
        </template>

        <template v-slot:opera>
            <nav class="">
                <button class="btn-pri_out btn-input px_x3">產品庫存</button>
                <span class="px_s"></span>
                <button @click="mod(120)" class="btn-pri btn-input px_x3">新增物品</button>
            </nav>
        </template>

        <template v-slot:cont>
            <div>
                <nav class="table">
                    <contrast-tr></contrast-tr>
                    <ui-page-empty :srcs="contrs">
                        <collapse>
                            <collapse-td-item v-for="(v, i) in contrs" :key="i">

                                <template v-slot:tit>
                                    <contrast-td :one="v"/>
                                </template>
                                <template v-slot:cont>
                                    <contrast-expanel class="bg-FFF px_x2 py_x2 " :one="v"/>
                                </template>

                            </collapse-td-item>
                        </collapse>
                    </ui-page-empty>
                </nav>

                <modal-contrast></modal-contrast>

                <pagenation class="py_x2"></pagenation>
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
import ModalContrast from './comm/ModalContrast.vue'
import ContrastExpanel from './expan/ContrastExpanel.vue'
import ContrastTd from './table/ContrastTd.vue'
import ContrastTr from './table/ContrastTr.vue'
import ContrastTopFilter from './top/ContrastTopFilter.vue'
export default {
  components: { LayoutCont, ContrastTopFilter, ContrastTr, UiPageEmpty, Collapse, CollapseTdItem, ContrastTd, ContrastExpanel, ModalContrast, Pagenation },
    data() {
        return {
            contrs: [
                {
                    id: 1, number: '0001', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop', stas: '小包', remark: 'HKTVMALL 现在没货'
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>