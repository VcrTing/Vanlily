<template>
    <div class="fx-s ih-2em fx-b">
        <div class="w-23">
            <p>取貨:&nbsp;&nbsp;<span>{{ vai('delivery_method') }}</span>
                <span v-if="deiive.delivery_company">,&nbsp;{{ deiive.delivery_company }}</span>
            </p>
            <div>送貨員:&nbsp;&nbsp;<span>{{ vai('delivery_man_name') }}</span></div>
        </div>
        <div class="w-26">
            <p>運費:&nbsp;&nbsp;<view-money :money="vai('delivery_fee')"/></p>
            <div>聯絡電話:&nbsp;&nbsp;<span>{{ vai('delivery_man_phone_no') }}</span></div>
        </div>
        <div class="w-25">
            <p>附加運費:&nbsp;&nbsp;<view-money :money="vai('additional_fee')"/></p>
            <div>取貨時間:&nbsp;&nbsp;<span>{{ vai('delivery_man_pickup_time') }}</span></div>
        </div>
        <div class="w-29">
            <div>備註:&nbsp;&nbsp;<span>{{ order.remarks_1 }}</span></div>
        </div>
        <div class="w-22 fx-c">
            <p class="fx-l">
                <ui-checkbox-for-one :def="payment_is_open" @change="(n) => (payment_is_open = n)"/>
                <span class="pl">蛋糕已送達</span>
            </p>
        </div>
    </div>
</template>

<script>
import UiCheckboxForOne from '../../../../funcks/ui_element/input/checkbox/UiCheckboxForOne.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
export default {
  components: { ViewMoney, UiCheckboxForOne },
    props: [ 'deiive', 'order' ],
    computed: {
        is_arrav() { return false }
    },
    data() {
        return {
            payment_is_open: false
        }
    },
    watch: {
        payment_is_open(n) { this.submit() }
    },
    methods: {
        vai(k) { return this.deiive ? this.deiive[k] : '' },

        async submit() {
            const data = { 'payment_is_open': this.payment_is_open }
            const res = await this.serv.pay.edit( this, this.order.uuid , data)
        }
    }
}
</script>

<style lang="sass">
.ih-2em *
    line-height: 2em
.sts-i-pri
    line-height: 1em
</style>