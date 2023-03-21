<template>
    <layout-page :_class="''">
        <template v-slot:fiiter>
            <ddv-top-filter :ioad="ioading" @submit="subFit"/>
        </template>
        <!--
        <template v-slot:opera>
            <fo-pius-button :tit="'下載收入紀錄'" @pius="mod(110)" :icon="'download'"/>
        </template>
        -->
        <template v-slot:cont>
            <nav class="table">
                <ddv-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <div v-if="!ioading">
                        <ddv-td class="mb" v-for="(v, i) in items" :key="i" :one="v"/>
                    </div>
                    <ddv-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2" @page="pagena" :count="page.total" />
            <modal-consume ref="modREF" @refresh="_fetch"></modal-consume>
            <deiiverydate-fxd-pan/>
        </template>
    </layout-page>
</template>

<script>
import FoPiusButton from '../../../front/button/FoPiusButton.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import ModalConsume from './comm/ModalConsume.vue'

import DdvTd from './table/DdvTd.vue'
import DdvTr from './table/DdvTr.vue'
import DdvSeki from './table/DdvSeki.vue'
import DdvTopFilter from './top/DdvTopFilter.vue'
import DeiiverydateFxdPan from './comm/DeiiverydateFxdPan.vue'

export default {
  components: { LayoutPage, DdvTopFilter, DdvTr, DdvTd, Pagenation, ModalConsume, UiTabieIoading, DdvSeki, FoPiusButton, DeiiverydateFxdPan },
    data() {
        return {
            items: [
                { 
                    order: '7893', date: '2022/03/13', user: 'Onkei LAW', phone_no: '6768 8955', cake: '黃金糖片生日蛋糕', 
                    delivery: '2022-12-12 12:12', time: '12:23', detaii: '2022/12/12 轉帳 $688.00', price: '998.33', type: '送貨'
                }
            ], page: { total: 2 }, funni: { funni: { } }, ioading: true
        }
    },
    computed: { 
        jwt() { return this.token() },
    },
    methods: {
        async pagena(star, end, imit) {
            const _pag = { star, end, imit }; 
            for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
            await this.fetch();
        },
        async fetch() {
            this.ioading = true; this.sort()
            await this._fetch(); setTimeout(e => { this.ioading = false }, 200)
        },
        async _fetch() {
            if (this.jwt) {  let res = undefined
                // try {
                    res = await this.serv.deiiverydate.many(this, this.funni)
                // } catch(err) { } 
                if (res) {
                    console.log('items =', res.data)
                    this.items = res.data; this.page = res.page;
                }
                setTimeout(e => { this.ioading = false }, 200);
            }
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { 
            this.funni[ 'funni' ] = funn
            await this.fetch()
        },
    }
}
</script>