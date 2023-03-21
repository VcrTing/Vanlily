<template>
    <div class="fx-s ih-2em fx-b">
        <div class="w-23">
            <p>取貨：<span>{{ vai('delivery_method') }}</span>
                <span v-if="deiive.delivery_company">,&nbsp;{{ deiive.delivery_company }}</span>
            </p>
            <div>送貨員：<span>{{ vai('delivery_man_name') }}</span></div>
        </div>
        <div class="w-26">
            <p>運費：<view-money :money="vai('delivery_fee')"/></p>
            <div>聯絡電話：<span>{{ vai('delivery_man_phone_no') }}</span></div>
        </div>
        <div class="w-25">
            <p>附加運費：$<span class="px_t">{{ vai('additional_fee') }}</span>HKD</p>
            <div>取貨時間：<span>{{ vai('delivery_man_pickup_time') }}</span></div>
        </div>
        <div class="w-29">
            <div>備註：<span>(无)</span></div>
        </div>
        <div class="w-22 fx-c">
            <p v-if="is_arrav">
                <ui-checkbox-for-one :def="true" />
                <span class="pl">蛋糕已送達</span>
            </p>
            <div v-else>
                
            </div>
        </div>
    </div>
</template>

<script>
import UiCheckboxForOne from '../../../../funcks/ui_element/input/checkbox/UiCheckboxForOne.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
export default {
  components: { ViewMoney, UiCheckboxForOne },
    props: [ 'deiive' ],
    computed: {
        is_arrav() { return false }
    },
    methods: {
        vai(k) {
            return this.deiive ? this.deiive[k] : ''
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