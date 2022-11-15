<template>
    <div class="chart-wrapper">
        <div id="chrt_pay_ring"></div>
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
        named() { return [ '现金', '转账', 'Paypal', 'Alipay HK', 'EPS', 'WeChat Pay HK', 'Pay ME' ] },
        mon() { return [] }
    },
    mounted() {
        this.option = {
            legend: {
                icon: 'circle', x: 'right', y: 'center', top: '12px', right: '24px',
                orient: 'vertical', itemGap: 12, // padding: [ '0p', '24px', '0px', '0px' ],
                data: this.named
            },
            color: [ '#a286d3', '#73a0fa', '#73ddb3', '#7584a1', '#ea7e64', '#f8c63a', '#84cfef' ],
            series: [
                {
                type: 'pie',
                radius: ['58%', '90%'], // 环
                center: [ "40%", "50%"], // 方位
                avoidLabelOverlap: true,
                label: {
                    show: true, formatter: '{b|{b}}\n\n{c|{c}}', 
                    fontSize: '0.82em',
                    rich: { b: { fontSize: '1em' }, c: { fontSize: '0.82em' } }
                }, 
                emphasis: {
                    label: { show: true, fontSize: '1em' }
                },
                labelLine: { show: true, length: 24 },
                data: [
                    { value: 1000, name: this.named[0] },
                    { value: 1400, name: this.named[1] },
                    { value: 1200, name: this.named[2] },
                    { value: 2000, name: this.named[3] },
                    { value: 2300, name: this.named[4] },
                    { value: 1210, name: this.named[5] },
                    { value: 1800, name: this.named[6] },
                ]
            } ]
        }
        this.chart = echarts.init(
            document.getElementById('chrt_pay_ring')
        )

        this.chart.setOption(this.option)
    }
}
</script>

<style>

</style>