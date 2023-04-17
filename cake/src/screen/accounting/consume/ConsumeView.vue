<template>
    <layout-cont :_class="'pt_x2'" :_collapse="exp">
        <template #filter>
            <consume-top-filter :ioad="ioading" @submit="subFit"/>
        </template>
        <template #opera>
            <fo-pius-button :tit="'新增支出'" @pius="mod(110)"/>
        </template>
        <template #center>
            <consume-center-card :funn="funni" v-if="funni" class="upper"></consume-center-card>
        </template>
        <template #cont>
            <nav class="table">
                <consume-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <collapse v-if="!ioading">
                        <collapse-td-item v-for="(v, i) in items" :key="i" >
                            <template #tit>
                                <consume-td :one="v"/>
                            </template>
                            <template #cont>
                                <div>
                                    &nbsp;
                                </div>
                            </template>
                        </collapse-td-item>
                    </collapse>
                    <consume-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2 op-0" :class="{ 'anim-page': init }" @page="pagena" :count="page.total" />
            <modal-consume ref="modREF" @refresh="_fetch"></modal-consume>
        </template>
    </layout-cont>
</template>

<script>
import FoPiusButton from '../../../front/button/FoPiusButton.vue'
import Collapse from '../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutCont from '../../../funcks/ui_layout/layout/page/LayoutCont.vue'
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import ModalConsume from './comm/ModalConsume.vue'
import ConsumeSeki from './table/ConsumeSeki.vue'
import ConsumeTd from './table/ConsumeTd.vue'
import ConsumeTr from './table/ConsumeTr.vue'
import ConsumeCenterCard from './top/ConsumeCenterCard.vue'
import ConsumeTopFilter from './top/ConsumeTopFilter.vue'

export default {
  components: { LayoutCont, ConsumeTopFilter, ConsumeTr, CollapseTdItem, ConsumeTd,
    Collapse, Pagenation, ModalConsume, ConsumeCenterCard, UiTabieIoading,
    ConsumeSeki, FoPiusButton },
    data() {
        return { init: false,
            items: [ ], page: { total: 2 }, funni: { funni: { } }, ioading: true, exp: false
        }
    },
    methods: {
        async pagena(star, end, imit) {
            const _pag = { star, end, imit }; 
            for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
            await this.fetch();
        },
        async fetch() {
            return new Promise(async rej => {
                this.ioading = true; this.sort()
                await this._fetch(); setTimeout(e => { this.ioading = false }, 200);
                rej(0)
            })
        },
        async _fetch() {
            // if (this.jwt) { 
                const res = await this.serv.consume.many(this, this.funni) 
                if (res) {
                    this.items = res.data; this.page = res.page; this.opened()
                }
                setTimeout(e => { this.ioading = false }, 200); this.init = true
            // }
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { 
            this.funni[ 'funni' ] = funn
            await this.fetch()
        },
        opened() {
            let res = false
            const src = this.funni.funni
            if (this.funni && src) {
                if (src.startDate && (src.startDate != src.endDate)) {
                    if (this.items.length > 0) { res = true }
                }
            }
            this.exp = res
        }
    }
}
</script>