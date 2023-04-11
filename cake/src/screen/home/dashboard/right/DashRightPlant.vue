<template>
    <div class="px_x py">
        <h4>客戶來源</h4>
        <div class="">
            <ui-chart-user-from ref="chart" />
        </div>
    </div>
</template>

<script>
import UiChartUserFrom from '../../../../funcks/ui_view/chart/UiChartUserFrom.vue'
export default {
  components: { UiChartUserFrom },
    methods: {
        resetChart(many) { this.$refs.chart.reset( this.ser_data( many ) ) },
        ser_data(src) {
            // console.log('SRC =', src)
            return src.map(e => {
                if (e.name == 'unknown_source') { e.name = '未知來源' }

                return e
            })
        }
    }
}
</script>