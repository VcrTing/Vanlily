<template>
    <div class="dash-top-card">
        <div>{{ txt_now }}銷售金額</div>
        <nav class="fx-s">
            <div class="h0">
                <span>HKD&nbsp;</span>
                <fk-countup v-if="one.orderPriceTotal" :v="one.orderPriceTotal"/>
                <span v-else>0.00</span>
            </div>
            <button class="btn-pri_light btn-icon h3_son d-ib">
                <i class="mdi mdi-currency-usd"></i>
            </button>
        </nav>
        <div>
            <span>比<span>{{ txt }}</span>{{ ia_add }}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="pri_light_son"><span>{{ num }}</span>%</span>
        </div>
    </div>
</template>

<script>
import FkCountup from '../../../../funcks/tooikit/FkCountup.vue'

import Money from '../../../../funcks/ui/money/Money.vue'
export default {
  components: { Money, FkCountup },
    props: {
        one: Object,
        txt: String,
        txt_now: String
    },
    computed: {
        ia_add() {
            if (this.one.pius) {
                if (this.one.pius.orderPriceTotal < 0) {
                    return '減少'
                }
            }
            return '增加'
        },
        num() {
            const res = this.one.pius ? Math.abs( this.one.pius.orderPriceTotal ) : 0
            return this.one.orderPriceTotal ? res : 0
        }
    }
}
</script>