<template>
    <div class="fx-s">
        <div class="w-85 fx-s">
            <div class="30">
                付款日期：<span>{{ vai('payment_date') }}</span>
            </div>
            <div class="25">
               付款方法：<span>{{ vai('payment_method') }}</span>
            </div>
            <div class="25">
                费用：<view-money :money="vai('payment_fee')"/>
            </div>
            <div class="20">
                状况：<span v-if="vai('payment_is_open')">开放</span>
                <span v-else>关闭</span>
            </div>
        </div>
        <button class="pri">
            编辑
        </button>
    </div>
</template>

<script>
import ViewMoney from '../../view/money/ViewMoney.vue'
export default {
  components: { ViewMoney },
    props: {
        pay: Object
    },
    methods: {
        vai(k) {
            return this.pay ? this.pay[k] : ''
        }
    }
}
</script>

<style>

</style>