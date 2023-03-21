<template>
    <div class="chart-wrapper">
        <div id="chrt_money_statis"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    props: [ 'many' ],
    data() {
        return {
            chart: null, option: { }
        }
    },
    methods: {
        data(many = [ ]) {
            if (!many) return [ 0, 0, 0, 0, 0, 0, 0 ];
            return many.map(e => e.value)
        },
        min(many = [ ], min = 9999999) {
            if (!many) return 0;
            many.map(e => { if (e.value < min) { min = e.value } }); min -= 50
            return min < 0 ? 0 : Math.ceil(min)
        },
        mon(many = [ ]) { 
            if (!many) return [ '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日' ];
            return many.map( e => e.date)
        },

        reset(many) {
            this.option = {
                tooltip: { trigger: 'axis', axisPointer: { type: 'cross', label: { backgroundColor: 'rgb(92, 97, 109)' } } },
                grid: {
                    top: '16px', left: "8px", right: "0px", bottom: '0.4%',
                    containLabel: true
                },
                xAxis: {
                    data: this.mon(many),  
                    axisLine: { show: false },
                    boundaryGap: true, // 左右留白
                    axisTick: { length: 1, lineStyle: { type: 'dashed' } },
                },
                yAxis: {
                    min: this.min(many),
                    axisLabel: { fontSize: '0.83em', },
                },
                series: [
                    {
                        data: this.data(many), type: 'line', smooth: false, // 曲线展示
                        symbol: 'none', symbolSize: 2, // 拐点
                        label: { show: false },
                        lineStyle: { width: 2.4, color: '#379efe', opacity: 1 },
                        itemStyle: {
                            borderWidth: 3,
                            borderColor: 'yellow', color: 'blue'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#d5e3fc' }, 
                                    { offset: 1, color: '#d5e3fc55' }
                                ], global: false
                            },
                            shadowColor: '#379efe'
                        }
                    }
                ]
            }
            this.chart.setOption(this.option)
        }
    },
    mounted() {
        this.chart = echarts.init( document.getElementById('chrt_money_statis') )
        this.reset(null)
    }
}
// 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' 
</script>