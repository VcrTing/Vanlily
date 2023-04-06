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
            option: { }
        }
    },
    computed: { 
        mon() {
            return [ 'Facebook', 'Whatsapp', 'Website', 'Email', 'Referral' ]
        }
    },
    methods: {
        named(many) {
            let res = [ 'Whatsapp', 'Website', 'Email' ]
            const data = this.data(many)
            if (data) {
                res = [ ]
                data.map(e => {
                    res.push( e.name )
                })
            } return res
        },
        data(many) {
            let src = many
            if (!src || src.length <= 0) { return [
                { name: 'Whatsapp', value: 0 }, { name: 'Website', value: 0 }, { name: 'Email', value: 0 }
            ] } else {
                return src
            }
        },
        itemGap(many) {
            const _L = this.data(many).length
            if (_L < 4) { return 24 } else { return _L < 7 ? 16 : 12 }
        },

        reset(many) {

            return new Promise(rej => {
                this.option = {
                    legend: {
                        orient: 'vertical', icon: 'circle', 
                        x: 'left', y: 'bottom', itemGap: this.itemGap(many),
                        data: this.named(many)
                    },
                    color: [ '#72a0fb', '#72deb2', '#7684a2', '#f8c63a', '#ea7e64' ],
                    series: [
                        {
                            type: 'pie',
                            radius: ['40%', '62%'],
                            center: [ "50%", "38%"], // 方位
                            avoidLabelOverlap: true,
                            label: {
                                show: true, formatter: '{b}\n\n{c|{c}}', 
                                fontSize: '0.82em', // alignTo: 'edge', position: 'outer'
                                rich: { c: { fontSize: '0.82em' } }
                            },
                            labelLine: { show: true, length: 12, lineStyle: { color: '#cfcfcf' } },
                            emphasis: {
                                label: { show: true, fontSize: '1em' }
                            },
                            data: this.data( many )
                        }
                    ]
                }
                this.chart.setOption(this.option)

                rej(0)
            })
        }
    },
    mounted() {
        this.chart = echarts.init( document.getElementById('chrt_user_form') )
        this.reset()
    }
}
</script>