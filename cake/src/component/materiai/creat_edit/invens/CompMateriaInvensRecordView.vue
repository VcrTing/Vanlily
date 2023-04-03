<template>
    <div class="pb_x2">
        <nav class="table table-sdw tabie-materiai">
            <nav class="tr py_ipt sun">
                <div class="w-30">店鋪名</div>
                <div class="w-26">來貨日期</div>
                <div class="w-28">過期日期</div>
                <div class="w-11">數量</div>
                <div class="w-5">&nbsp;</div>
            </nav>
            <nav class="td" v-for="(v, i) in many" :key="i">
                <div class="w-30">{{ v.shop_name }}</div>
                <div class="w-26">{{ v.import_date }}</div>
                <div class="w-28">{{ v.expire_date }}</div>
                <div class="w-11 py_s pri">{{ v.quantity }}</div>
                <div class="w-5">&nbsp;</div>
            </nav>
        </nav>
        <div class="py"></div>
    </div>
</template>

<script>
import Pagenation from '../../../../funcks/ui/pagenation/Pagenation.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
import CompMirForm from './form/CompMirForm.vue'
export default {
  components: { PanelInner, CompMirForm, Pagenation },
    props: {
        materiai: Object
    },
    data() {
        return {
            items: [
                // { shop_name: 'As Shop', import_date: '2022-12-12', expire_date: '2022-12-12', quantity: 9 },
            ]
        }
    },
    computed: {
        many() {
            return (this.materiai && this.materiai.stock_record) ? this.materiai.stock_record : [ ]
        }
    }
}
</script>