<template>
    <div class="fx-s">
        <div class="w-85 fx-s">
            <div class="30">
                付款日期:&nbsp;&nbsp;<span>{{ vai('payment_date') }}</span>
            </div>
            <div class="25 fx-l">
               付款方法:&nbsp;&nbsp;
               <vf-payway-select :def="vai('payment_method_title')" :_txt_mode="true"/>
            </div>
            <div class="25">
                费用:&nbsp;&nbsp;<view-money :money="vai('payment_fee')"/>
            </div>
            <div class="20">
                状况:&nbsp;&nbsp;<span v-if="vai('payment_is_open')">开放</span>
                <span v-else>关闭</span>
            </div>
        </div>
        <div class="fx-1 fx-r" @click="$emit('edit')">
            <span class="pri hand">編輯</span>
        </div>
    </div>
</template>

<script>
import ViewMoney from '../../view/money/ViewMoney.vue'
import VfPaywaySelect from '../../view_form/order/VfPaywaySelect.vue'
export default {
  components: { ViewMoney, VfPaywaySelect  },
    props: {
        pay: Object
    },
    emits: [ 'edit' ],
    methods: {
        vai(k) {
            return this.pay ? this.pay[k] : ''
        }
    }
}
</script>