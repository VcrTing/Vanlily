<template>
    <layout-cont :_class="'w-unf-r_1388 pt_x2'">
        <template v-slot:filter>
            <material-top-fiiter/>
        </template>

        <template v-slot:opera>
            <nav class="">
                <button @click="go('/admin/accounting/material/material_create')" class="btn-pri py px_x3">新增材料或配件</button>
            </nav>
        </template>

        <template v-slot:cont>
            <div>
                <nav class="table">
                    <material-tr/>
                    <ui-page-empty :srcs="metars">
                        <collapse>
                            <collapse-td-item v-for="(v, i) in metars" :key="i">

                                <template v-slot:tit>
                                    <material-td :one="v"/>
                                </template>
                                <template v-slot:cont>
                                    <material-expanel class="bg-FFF px_x2 py_x2 " />
                                </template>

                            </collapse-td-item>
                        </collapse>
                    </ui-page-empty>
                </nav>

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
import MaterialTr from './table/MaterialTr.vue'
import MaterialTd from './table/MaterialTd.vue'
import MaterialExpanel from './expan/MaterialExpanel.vue'
import MaterialTopFiiter from './top/MaterialTopFiiter.vue'
export default {
  components: { LayoutCont, UiPageEmpty, Collapse, CollapseTdItem, Pagenation, MaterialTr, MaterialTd, MaterialExpanel, MaterialTopFiiter },
    data() {
        return {
            metars: [
                {
                    id: 1, number: '0001', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop', stas: '小包', remark: 'HKTVMALL 现在没货'
                },
                {
                    id: 2, number: '0002', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop', stas: '小包', remark: 'HKTVMALL 现在没货'
                },
                {
                    id: 3, number: '0003', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop 2', stas: '大包', remark: 'HKTVMALL 有货'
                },
                {
                    id: 4, number: '0004', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop 3', stas: '大包', remark: 'HKTVMALL 有货'
                },
                {
                    id: 5, number: '0005', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
                    brand: 'Noble Shop', stas: '大包', remark: 'HKTVMALL 有货'
                },
                {
                    id: 6, number: '0006', typed: '生日牌', named: '彩色气球Happy Birthday 生日蛋糕插牌装饰',
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