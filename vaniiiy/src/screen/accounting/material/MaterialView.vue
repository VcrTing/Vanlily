<template>
    <layout-cont :_class="'w-unf-r_1388 pt_x2'">
        <template v-slot:filter>
            <material-top-fiiter @search="(n) => q = n"/>
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
                    <ui-page-empty :srcs="items">
                        <collapse>
                            <collapse-td-item v-for="(v, i) in items" :key="i">

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

                <pagenation @page="pageni" :count="(items && items.length > 0) ? items.length : 10" class="py_x2" :_limit="200"></pagenation>
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
            q: '', page: {  }, funni: { },
            items: [ ],
            metars: [
                {
                    id: 1, number: '', type: '', name: '',
                    brand: '', specification: '', remarks: ''
                }
            ]
        }
    },
    methods: {
        async pageni(star, end, imit) {
            this.funni = { star, end, imit }
            const res = await this._fetch();
            if (res) {
                this.items = res.data; this.page = res.page;
            }
        },
        async _fetch(q = '') {
            return await this.serv.materiai.many(this, q, this.funni.star, this.funni.imit)
        },
    }
}
</script>

<style>

</style>