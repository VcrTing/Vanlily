<template>
        <div class="fx-l">
            <div class="w-50 fx-l">
                <div class="w-46">
                    送貨日期：<span>{{ deiive ? deiive.delivery_date : '' }}</span>
                </div>
                <div class="w-54">
                    送貨時段：<span>{{ timed }}</span>&nbsp;&nbsp;
                    <button v-if="timed" class="btn-succ righter">已更新</button>
                </div>
            </div>
            <div class="w-50 fx-l">
                <div class="w-35">
                    實際送貨時間：<span>{{ deiive ? deiive.actual_delivery_time : '' }}</span>
                </div>
                <div class="w-65">
                    錄入地址：
                    <var-order-deiive-addr :order="true" :deiive="deiive"/>
                </div>
            </div>
        </div>
</template>

<script>
import VarOrderDeiiveAddr from '../../../../front/variab/deiive/VarOrderDeiiveAddr.vue'
export default {
    props: [ 'deiive' ],
    components: {

        VarOrderDeiiveAddr
    },
    computed: {
        timed() {
            return this.deiive ? this.deiive.delivery_time : ''
        }
    }
}
</script>

<style>

</style>