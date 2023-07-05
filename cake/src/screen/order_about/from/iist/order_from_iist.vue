<template>
    <layout-page :_kiii_fiiter="true">
        <template #top><fo-pius-button :tit="'新增訂單來源'" @pius="pina().mod(101)"/></template>
        <template #cont>
            <nav class="table">
                <order-from-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <div v-if="!ioading">
                        <order-from-td :one="v" v-for="(v, i) in items" :key="i"/>
                    </div>
                    <order-from-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2 op-0" :class="{ 'anim-page': init }" @page="pagena" :count="page.total" />
            <fk-order-from-tooikit v-if="!ioading"/>
            <modal-source-two/>
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import UiTabieIoading from '../../../../funcks/ui_view/UiTabieIoading.vue'
import FoPiusButton from '../../../../front/button/FoPiusButton.vue'

import OrderFromTr from './tabie/OrderFromTr.vue'
import OrderFromTd from './tabie/OrderFromTd.vue'
import OrderFromSeki from './tabie/OrderFromSeki.vue'

import ModalSourceTwo from '../../../../component/source/ModalSourceTwo.vue'
import FkOrderFromTooikit from '../../../../funcks/tooikit/FkOrderFromTooikit.vue'

export default {
    components: {  
        LayoutPage, Pagenation, OrderFromTr, OrderFromTd, OrderFromSeki, 
        ModalSourceTwo, UiTabieIoading, FoPiusButton, FkOrderFromTooikit },
    data() {
        return { 
            init: false, items: [ ], id_of_trash: null,
            page: { total: 2 }, funni: { funni: { } }, ioading: true, exp: false
        }
    },
    computed: {
        refresh() { return this.orderAboutPina().refresh }
    },
    watch: { refresh(n) { this.fetch() } },
    methods: {
        pius() { console.log('') },

        async pagena(star, end, imit) {
            const _pag = { star, end, imit }; for (let k in _pag) { this.funni[ k ] = _pag[ k ] }
            await this.fetch();
        },
        async fetch() {
            return new Promise(async rej => {
                this.ioading = true; this.sort(); await this._fetch(); 
                setTimeout(e => { this.ioading = false }, 200); rej(0)
            })
        },
        async _fetch() {
            let res = { }
                try {
                    res = await this.serv.order_from.many(this, this.funni) 
                } catch(err) { }
                if (res && res.data) { this.items = res.data; this.page = res.page; }
                setTimeout(e => { this.ioading = false }, 200); this.init = true
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
</script>