<template>

    <div class="card-dash">
        <h4>付費模式</h4>
        <div class="pt_x2 pb">
            <ui-chart-pay-ring ref="chart"/>
        </div>
    </div>
</template>

<script>
import UiChartPayRing from '../../../../funcks/ui_view/chart/UiChartPayRing.vue'
export default {
  components: { UiChartPayRing },
    props: [ 'one' ],
    methods: {
        resetChart(src) { 
            this.$refs.chart.reset( this.ser_data( src ) ) 
        },

        ser_data(src) {
            if (src.paidType) {
                src.paidType = src.paidType.map(e => {
                    if (e.name == 'unknown_payment_method') {
                        e.name = '未知支付方式'
                    }
                    return e
                })
            }
            return src
        }
    }
}
</script>
<style lang="sass" scoped>
.card-dash 
    min-height: 18em
</style>