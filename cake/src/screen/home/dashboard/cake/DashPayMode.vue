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
        resetChart(many) { 
            this.$refs.chart.reset( this.ser_data( many ) ) 
        },

        ser_data(src) {
            // console.log('SRC =', src)
            return src
        }
    }
}
</script>
<style lang="sass" scoped>
.card-dash 
    min-height: 18em
</style>