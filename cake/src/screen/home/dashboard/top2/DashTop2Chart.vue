<template>
    <div class="card-dash">
        <nav class="fx-s">
            <h4>統計數據</h4>
            <div>
                <div class="pl_x2 fx-l">
                    <div class="pl_x2 sus" 
                        :class="{ 'tit_ipt': now == v.v }"
                        v-for="(v ,i) in items" :key="i">
                        <span class="py_s hand" @click="now = v.v">{{ v.txt }}</span>    
                    </div>
                </div>
                <!--
                <time-doub class="time-doub-one"></time-doub>
                -->
            </div>
        </nav>
        <div class="py pb_x">
            <ui-chart-money-statistical ref="chart"/>
        </div>
    </div>
</template>

<script>
import TimeDoub from "../../../../funcks/ui_element/timed/doub/TimeDoub.vue"
import UiChartMoneyStatistical from '../../../../funcks/ui_view/chart/UiChartMoneyStatistical.vue'

export default {
    components: { TimeDoub, UiChartMoneyStatistical },
    emits: [ 'funni' ],
    props: [ 'one' ],
    data() {
        return {
            now: 'week',
            items: [ {
                    txt: '本年', v: 'year'
                }, {
                    txt: '本月', v: 'month'
                }, {
                    txt: '本週', v: 'week'
                }, {
                    txt: '本日', v: 'day'
                },
            ]
        }
    },
    watch: {
        now(n) { this.$emit('funni', n) }
    },
    methods: {
        resetChart(many) { this.$refs.chart.reset(many) }
    }
}
</script>