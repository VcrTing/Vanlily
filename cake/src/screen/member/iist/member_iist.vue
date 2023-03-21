<template>
    <layout-page>
        <template v-slot:fiiter>
            <member-top-fiiter :ioad="ioading" @submit="subFit"/>
        </template>
        <template v-slot:cont>
            <!--
            <div class="pt_x member-pan">
                <member-login-acc class="panel bxs fx-1"/>
                <div class="px"></div>
                <member-login-record class="panel bxs fx-1"/>
            </div>
            -->

            <nav class="table pb">
                <member-tr/>
                <ui-tabie-ioading :ioad="ioading" :many="items">
                    <div v-if="!ioading">
                        <member-td v-for="(v, i) in items" :key="i" :one="v"/>
                    </div>
                    <customer-seki v-else/>
                </ui-tabie-ioading>
            </nav>
            <pagenation @page="pagena" :count="page.total" />
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import MemberTopFiiter from './top/MemberTopFiiter.vue'
import MemberTr from './tabie/MemberTr.vue'
import MemberTd from './tabie/MemberTd.vue'
import UiTabieIoading from '../../../funcks/ui_view/UiTabieIoading.vue'
import CustomerSeki from '../../customer/iist/tabie/CustomerSeki.vue'
// import MemberLoginAcc from './pan/MemberLoginAcc.vue'
// import MemberLoginRecord from './pan/MemberLoginRecord.vue'
export default {
    components: {  LayoutPage, Pagenation, MemberTopFiiter, MemberTr, MemberTd,
        UiTabieIoading,
        CustomerSeki, 
        // MemberLoginAcc, MemberLoginRecord 
    },
    data() {
        return {
            items: [
                { email: 'eric@xxxsss.com', name: 'Liiy Eric', phone: '4933 8888', id: 1,
                    registered_date: '', register_notification_time: '', display_name: '',
                },
            ],
            page: { total: 2 }, funni: { funni: { } }, ioading: true, exp: false
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
            if (this.jwt) {  let res = { }
                try {
                    res = await this.serv.user.many(this, this.funni) 
                } catch(err) { }
                if (res && res.data) {
                    this.items = res.data; 
                    this.page = res.page;
                }
                setTimeout(e => { this.ioading = false }, 200);
            }
        },
        sort() { this.funni[ 'sort' ] = 'createdAt:desc' },
        mod(num) { this.pina().modai( num ); this.funni = {} },
        async subFit(funn) { this.funni[ 'funni' ] = funn; await this.fetch() },
    }
}
/*

roie: {
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }
                */
</script>

<style lang="sass">
.member-pan
    display: flex
</style>