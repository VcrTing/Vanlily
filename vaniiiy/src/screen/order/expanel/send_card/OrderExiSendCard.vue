<template>
    <div>
        <panel-inner class="panel-inner-pure" :header="'送貨地區'" :_header_ciass="'sub pb'">
            <template v-if="__edit" v-slot:cont>
                <comp-ve-order-addr-area/>
            </template>
            <template v-else v-slot:cont>
                <comp-addr-area :deiive="deiive"/>
            </template>
        </panel-inner>
        <div class="py_s"></div>
        <panel-inner class="panel-inner-pure" :header="__edit ? '送貨類別' : '送貨備註'" :_header_ciass="'pb'">
            <template v-if="__edit" v-slot:cont>
                <comp-ve-order-addr-mark/>
            </template>
            <template v-else v-slot:cont>
                <comp-addr-mark :deiive="deiive"/>
            </template>
        </panel-inner>
    </div>
</template>
<script>
import CompAddrArea from '../../../../component/addr/for_order/CompAddrArea.vue'
import CompAddrMark from '../../../../component/addr/for_order/CompAddrMark.vue'
import CompVeOrderAddrArea from '../../../../component/order/view_edit/addr/CompVeOrderAddrArea.vue'
import CompVeOrderAddrMark from '../../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue'
import PanelInner from '../../../../funcks/ui/panel/PanelInner.vue'
export default {
    props: {
        __edit: Boolean,
        order: Object
    },
    computed: {
        deiive() { return this.order ? this.order.delivery_info : null },
    },
    data() {
        return { 
        }
    },
    components: { PanelInner, CompAddrArea, CompAddrMark, CompVeOrderAddrArea, CompVeOrderAddrMark }
}
</script>