<template>
    <div class="">
        <div id="chrt_user_form"></div>
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
            return [ 'Facebook', 'Whatsapp', 'Website', 'Email', 'Referral' ]
        }
    },
    mounted() {
        this.chart = echarts.init(
            document.getElementById('chrt_user_form')
        )

        this.option = {
            legend: {
                orient: 'vertical', icon: 'circle', 
                x: 'left', y: 'bottom', itemGap: 12,
                data: this.mon
            },
            color: [ '#72a0fb', '#72deb2', '#7684a2', '#f8c63a', '#ea7e64' ],
            series: [
                {
                type: 'pie',
                // radius: ['52%', '82%'],
                radius: ['40%', '62%'],
                center: [ "50%", "40%"], // 方位
                avoidLabelOverlap: true,
                // hoverAnimation: false,
                label: {
                    show: true, formatter: '{b}\n\n{c|{c}}', 
                    fontSize: '0.82em', // alignTo: 'edge', position: 'outer'
                    rich: { c: { fontSize: '0.82em' } }
                },
                labelLine: { show: true, length: 12, lineStyle: { color: '#cfcfcf' } },
                emphasis: {
                    label: { show: true, fontSize: '1em' }
                },
                data: [
                    { value: 335, name: this.mon[0] },
                    { value: 213, name: this.mon[1] },
                    { value: 23, name: this.mon[2] },
                    { value: 322, name: this.mon[3] },
                    { value: 34, name: this.mon[4] },
                ]
                }
            ]
        }

        this.chart.setOption(this.option)
        this.chart.resize()
    }
}
</script>

<style>

</style>