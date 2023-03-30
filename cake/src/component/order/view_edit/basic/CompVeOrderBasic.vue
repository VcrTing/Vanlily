<template>
    <nav>
        <div class="fx-s pb_s">
            <p class="w-333">
                落單同事：
                <span v-if="one && one.in_charge">{{ one.in_charge }}</span>
                <span v-else class="sus">(未記錄)</span>
            </p>
            <p class="w-333">
                訂單日期：
                <span>
                    {{ one.ordered_date ? timed.view(one.ordered_date) : '...' }}
                </span>
            </p>
            <p class="w-333">
                來源：
                <vf-buy-plant-select v-if="one.order_from" :def="one.order_from" :_txt_mode="true"/>
                <span v-else>其他</span>
            </p>
        </div>
        <div class="fx-s fx-t">
            <p class="w-333">
                客戶姓名：
                <span>{{ one.customer_name ? one.customer_name : '' }}</span>
            </p>
            <p class="fx-1">
                客戶電話：
                <span>
                    <span v-if="one.customer_phone_no_1">{{ one.customer_phone_no_1 }}</span>
                    <span v-else>(無)</span>
                </span>
                <fk-search-oid-order v-if="one.customer_phone_no_1 && !kiii_history" :phone="one.customer_phone_no_1"/>
            </p>
            
            <p class="w-333" v-if="!kiii_phone_2">
                客戶電話：
                <span>
                    <span v-if="one.customer_phone_no_2">{{ one.customer_phone_no_2 }}</span>
                    <span v-else>(無)</span>
                </span>
                <fk-search-oid-order v-if="one.customer_phone_no_2 && !kiii_history" :phone="one.customer_phone_no_2"/>
            </p>
        </div>
    </nav>
</template>
<script>
import FkSearchOidOrder from '../../../../funcks/order/static/FkSearchOidOrder.vue'
import TimeOne from '../../../../funcks/ui_element/timed/one/TimeOne.vue'
import VfBuyPlantSelect from '../../../view_form/order/VfBuyPlantSelect.vue'
import VfGetWaySelect from '../../../view_form/send/VfGetWaySelect.vue'
export default {
  components: { VfBuyPlantSelect, FkSearchOidOrder, TimeOne, VfGetWaySelect },
    props: { 
        order: Object, kiii_phone_2: Boolean, kiii_history: Boolean
    },
    computed: {
        one() {
            return this.order
        },
    },
}
</script>