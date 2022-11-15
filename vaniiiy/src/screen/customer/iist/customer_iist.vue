<template>
    <layout-page>
        <template v-slot:fiiter>
            <customer-top-filter/>
        </template>
        <template v-slot:cont>
            <nav class="table pb">
                <customer-tr></customer-tr>
                <customer-td v-for="(v, i) in items" :key="i" :one="v"></customer-td>
            </nav>
            <pagenation/>
        </template>
    </layout-page>
</template>

<script>
import LayoutPage from '../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import CustomerTd from './tabie/CustomerTd.vue'
import CustomerTopFilter from './top/CustomerTopFilter.vue'
import CustomerTr from './tabie/CustomerTr.vue'
import Pagenation from '../../../funcks/ui/pagenation/Pagenation.vue'
export default {
  components: { CustomerTopFilter, LayoutPage, CustomerTr, CustomerTd, Pagenation },
    data() {
        return {
            items: [
                { name: 'Eric', phone: '4933 8888', order_num: 991, id: 1 },
                { name: 'Stan', phone: '1522 7787', order_num: 31, id: 1 },
                { name: 'Lucy ', phone: '9933 8888', order_num: 991, id: 1 },
                { name: 'Stan ', phone: '1222 7787', order_num: 31, id: 1 },
                { name: '章子怡', phone: '6933 8888', order_num: 991, id: 1 },
                { name: 'Stun iconatic lily', phone: '1722 7787', order_num: 1131, id: 1 },
            ]
        }
    }
}
</script>

<style>

</style>