<template>
    <div class="chart-wrapper">
        <div id="chrt_money_statis"></div>
    </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts'

export default {
    data() {
        return {
            chart: null,
            option: null
        }
    },
    computed: { 
        mon() {
            return [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]
        },
        min() {
            return 1000
        }
    },
    mounted() {
        this.option = {
            tooltip: { show: false },
            grid: {
                top: '16px', left: "6px", right: "0px", bottom: '0%',
                containLabel: true
            },
            xAxis: {
                data: this.mon, 
                boundaryGap: true, // 左右留白
                axisLabel: { 
                    fontSize: "0.82em" //字迹大小
                },
                axisTick: { 
                    alignWithLabel: true //刻度不显示
                },
                axisLine: { show: false }
            },
            yAxis: {
                min: this.min,
                axisLabel: {
                    fontSize: '0.82em',
                    /*
                    textStyle: {
                        fontSize: '0.82em',
                    }
                    */
                },
            },
            series: [
                {
                    data: [ 3120, 2340, 1200, 1540, 1220, 1980, 1980, 1490, 2400, 1340, 1870, 1580],
                    type: 'line',
                    smooth: false, // 曲线展示
                    symbol: 'none', symbolSize: 2, // 拐点
                    label: { show: false },
                    lineStyle: { width: 2.4, color: '#379efe', opacity: 1 },
                    /*
                    itemStyle: {
						normal: {
							borderWidth: 3,
							borderColor: 'yellow',
							color: 'blue'
						},
                    },
                    */
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: 'yellow',
                        color: 'blue'
                    },
                    //
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0, y: 0, x2: 0, y2: 1,
                            colorStops: [
                                { offset: 0, color: '#d5e3fc' // 0% 处的颜色
                                }, 
                                { offset: 1, color: '#d5e3fc55' // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        },
                        /*
                            normal: {
                            },
                        */
                        shadowColor: '#379efe'
                    }
                }
            ]
        }
        this.chart = echarts.init(
            document.getElementById('chrt_money_statis')
        )

        this.chart.setOption(this.option)
    }
}
</script>

<style>

</style>