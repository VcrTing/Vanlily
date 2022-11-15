<template>
    <div class="card-dash">
        <nav class="fx-s">
            <h4>統計數據</h4>
            <div>
                <time-doub class="time-doub-one"></time-doub>
            </div>
        </nav>
        <div class="py pb_x">
            <ui-chart-money-statistical></ui-chart-money-statistical>
        </div>
    </div>
</template>

<script>
import TimeDoub from "../../../../funcks/ui_element/timed/doub/TimeDoub.vue"
import UiChartMoneyStatistical from '../../../../funcks/ui_view/chart/UiChartMoneyStatistical.vue'

export default {
    components: { TimeDoub, UiChartMoneyStatistical },
}
</script>

<style>

</style>