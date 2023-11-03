<template>
    <layout-cont :_class="'w-unf-p fx-b pt_x2'">
        <template v-slot:top>
            <button class="btn-pri px py_t">
                <i class="mdi mdi-skip-backward-outline"></i>
                返回
            </button>
        </template>

        <template v-slot:filter>
            <pro-inven-filter></pro-inven-filter>
        </template>

        <template v-slot:opera>
            <button @click="mod(125)" class="btn-pri btn-input px_x3">新增庫存</button>
        </template>

        <template v-slot:cont>
            <div>
                <div class="table">
                    <pro-inven-tr></pro-inven-tr>
                    <ui-page-empty :srcs="pros">
                        <collapse>
                            <collapse-td-item v-for="(v, i) in pros" :key="i">
                                <template v-slot:tit>
                                    <pro-inven-td :one="v"/>
                                </template>
                                <template v-slot:cont>
                                    <pro-iven-expanel :one="v"/>
                                </template>
                            </collapse-td-item>
                        </collapse>
                    </ui-page-empty>
                </div>

                <modal-proiven></modal-proiven>

                <pagenation class="py_x2"></pagenation>
            </div>
        </template>
    </layout-cont>
</template>

<script>
import LayoutCont from '../../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import ProInvenFilter from './top/ProInvenFilter.vue'
import ProInvenTr from './table/ProInvenTr.vue'
import ProInvenTd from './table/ProInvenTd.vue'
import UiPageEmpty from '../../../../funcks/ui_view/empty/UiPageEmpty.vue'
import Collapse from '../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import ProIvenExpanel from './expan/ProIvenExpanel.vue'
import ModalProiven from './comm/ModalProiven.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
export default {
    components: { LayoutCont, ProInvenFilter, ProInvenTr, ProInvenTd, UiPageEmpty, Collapse, CollapseTdItem, ProIvenExpanel, ModalProiven, Pagenation },
    data() { return { } },
    computed: { 
        pros() { return [
            {
                number: 'AS 0007', typed: { named: '糖片蛋糕' }, named: '金花糖片脆皮奶油蛋糕', brand: { named: 'Es Crop Lily' }, invent: 999, used: 444, bad: 23, specifications: { size: { named: '12x3' } }, remark: '这是备注'
            },
            {
                number: 'BK S99A', typed: { named: '糖片蛋糕' }, named: '水果糖片脆皮奶油蛋糕', brand: { named: 'Es Crop Lily' }, invent: 299, used: 144, bad: 23, specifications: { size: { named: '12x2' } }, remark: '这是备注'
            },
            {
                number: 'UO-7777', typed: { named: '餐具' }, named: '蛋糕刀叉蜡烛包', brand: { named: 'As shop' }, invent: 2999, used: 1444, bad: 223, specifications: { size: { named: '2' } }, remark: '这是备注'
            },
            {
                number: 'AS 0001', typed: { named: '糖片' }, named: '金花糖片', brand: { named: 'Es Crop Lily' }, invent: 99, used: 44, bad: 1, specifications: { size: { named: 'x3' } }, remark: '这是备注'
            },
            {
                number: 'AS 0007', typed: { named: '糖片蛋糕' }, named: '金花糖片脆皮奶油蛋糕', brand: { named: 'Es Crop Lily' }, invent: 999, used: 444, bad: 23, specifications: { size: { named: '12x3' } }, remark: '这是备注'
            },
        ] } 
    }
}
</script>