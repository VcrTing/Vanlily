<template>
    <layout-cont :_class="'pt_x2'">
        <template #filter>
            <material-top-fiiter :ioad="ioading" @submit="subFit"/>
        </template>
        <template #opera>
            <fo-pius-button class="softer" :tit="'新增材料及配件'" @pius="go('/admin/accounting/material/material_create')"/>
        </template>
        <template #cont>
            <nav class="table">
                <material-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <collapse v-if="!ioading">
                        <collapse-td-item v-for="(v, i) in items" :key="i">
                            <template v-slot:tit>
                                <material-td :one="v"/>
                            </template>
                            <template v-slot:cont>
                                <material-expanel class="bg-FFF px_x2 py_x2 " />
                            </template>
                        </collapse-td-item>
                    </collapse>
                    <material-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2 op-0" :class="{ 'anim-page': init }" @page="pagena" :count="page.total" />
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
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import MaterialSeki from './table/MaterialSeki.vue'
import FoPiusButton from '../../../front/button/FoPiusButton.vue'

export default {
  components: { LayoutCont, UiPageEmpty, Collapse, CollapseTdItem, Pagenation, MaterialTr, MaterialTd, MaterialExpanel, MaterialTopFiiter, UiTabieIoading
    , MaterialSeki, FoPiusButton },
    data() {
        return {
            items: [ ], init: false,
            metars: [
                {
                    id: 1, number: '', type: '', name: '',
                    brand: '', specification: '', remarks: ''
                }
            ],
            page: { total: 2 }, funni: { funni: { } }, ioading: true,
        }
    },
    methods: {
        async pagena(star, end, imit) {
            const _pag = { star, end, imit }; 
            for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
            await this.fetch();
        },
        async fetch() {
            this.ioading = true; this.sort();
            await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
        },
        async _fetch() {
            let res = { }
                try {
                    res = await this.serv.materiai.many(this, this.funni) 
                } catch(err) { }
                if (res && res.data) {
                    this.items = res.data; 
                    this.page = res.page;
                }
                setTimeout(e => { this.ioading = false }, 200); this.init = true
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
</script>