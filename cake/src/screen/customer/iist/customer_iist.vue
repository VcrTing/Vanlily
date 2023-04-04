<template>
    <layout-page>
        <template #fiiter>
            <!-- CUSTOMER -->
            <customer-top-filter :ioad="ioading" @submit="subFit"/>
        </template>
        <template #cont>
            <nav class="table">
                <customer-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <div v-if="!ioading">
                        <customer-td v-for="(v, i) in items" :key="i" :one="v"/>
                    </div>
                    <customer-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation class="py_x2 op-0" :class="{ 'anim-page': init }" @page="pagena" :count="page.total" />
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import CustomerTd from './tabie/CustomerTd.vue'
import CustomerTopFilter from './top/CustomerTopFilter.vue'
import CustomerTr from './tabie/CustomerTr.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import CustomerSeki from './tabie/CustomerSeki.vue'
export default {
    components: { CustomerTopFilter, LayoutPage, CustomerTr, CustomerTd, Pagenation, UiTabieIoading, CustomerSeki },
    data() {
        return { init: false,
            items: [ 
                
            ], page: { total: 2 }, funni: { funni: { } }, ioading: true, exp: false
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
                try {
                    res = await this.serv.customer.many(this, this.funni) 
                } catch(err) { }
                if (res && res.data) {
                    this.items = res.data; this.page = res.page; // this.opened() 
                }
                setTimeout(e => { this.ioading = false }, 200); this.init = true
            }
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
</script>