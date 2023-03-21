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
        resetChart(many) { this.$refs.chart.reset(many) }
    }
}
</script>