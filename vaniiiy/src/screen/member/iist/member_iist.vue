<template>
    <layout-page>
        <template v-slot:fiiter>
            <member-top-fiiter/>
        </template>
        <template v-slot:cont>
            <div class="fx-s pt_x member-pan">
                <div class="w-48">
                    <member-login-acc class="panel bxs"/>
                </div>
                <div class="w-48">
                    <member-login-record class="panel bxs"/>
                </div>
            </div>

            <nav class="table pb mt">
                <member-tr/>
                <member-td v-for="(v, i) in items" :key="i" :one="v"></member-td>
            </nav>
            <pagenation/>
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
import MemberTopFiiter from './top/MemberTopFiiter.vue'
import MemberTr from './tabie/MemberTr.vue'
import MemberTd from './tabie/MemberTd.vue'
import MemberLoginAcc from './pan/MemberLoginAcc.vue'
import MemberLoginRecord from './pan/MemberLoginRecord.vue'
export default {
  components: {  LayoutPage, Pagenation, MemberTopFiiter, MemberTr, MemberTd, MemberLoginAcc, MemberLoginRecord },
    data() {
        return {
            items: [
                { email: 'eric@xxxsss.com', name: 'Liiy Eric', phone: '4933 8888', roie: {
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }, id: 1 },
                { email: 'lunar@xxxsss.com', name: 'Luna switch', phone: '7833 8888', roie: {
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }, id: 2 },
                { email: 'gosirity@xxxsss.com', name: 'Asas gosirity', phone: '4933 8888', roie: {
                    order: true, work: true, customer: true, analysis: true, account: false, member: false, 
                }, id: 3 },
                { email: 'eric2@xxxsss.com', name: 'Liiy Eric 2', phone: '4033 7777', roie: {
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }, id: 4 },
                { email: 'eric3@xxxsss.com', name: 'Liiy Eric 3', phone: '5933 8988', roie: {
                    order: true, work: true, customer: true, analysis: true, account: true, member: true, 
                }, id: 5 },
            ]
        }
    }
}
</script>

<style lang="sass">
.member-pan
    height: 30em
    & > div,
    & > div > div
        height: 100%
    & > div > div
        overflow: hidden
</style>