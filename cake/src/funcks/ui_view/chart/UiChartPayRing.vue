<template>
    <div class="chart-wrapper">
        <div id="chrt_pay_ring"></div>
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
        named(many) {
            const data = this.data(many)
            return data ? data.map(e => e.name) : [ '其他', '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款' ]
        },
        data(many = [ ]) {
            if (!many || many.length <= 0) return [ 
                { name: '其他', value: 0 }, 
                { name: '銀行轉帳 / 轉數快FPS / Alipay HK (支付寶香港) / 商業Payme 付款', value: 0 } ];
            return many
        },
        itemGap(many = [ ]) {
            const _L = this.data(many).length
            return (_L < 4) ? 24 : ( _L < 7 ? 16 : 12 )
        },

        reset(many) {
            return new Promise(async rej => {
                this.option = {
                    legend: {
                        type: 'plain', show: true,
                        icon: 'circle', // 
                        x: 'left', y: 'bottom', 
                        orient: 'vertical', 
                        itemGap: this.itemGap(many),
                        data: this.named(many), fontSize: '18px'
                    },
                    tooltip: {
                        trigger: 'item', formatter: '{b} : {c} ({d}%)'
                    },
                    color: [  '#f8c63a', '#84cfef', '#a286d3', '#73a0fa', '#73ddb3', '#7584a1', '#ea7e64',],
                    series: [
                        {
                            type: 'pie', data: this.data(many),
                            radius: ['32%', '52%'], // 环
                            center: [ "50%", "36%"], // 方位
                            avoidLabelOverlap: true,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10, shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.08)'
                                }
                            },
                            labelLine: { show: true, length: 24 },
                            label: {
                                show: true, formatter: '{b|{b}}\n\n{c|{c}}', 
                                fontSize: '0.7em',
                                rich: { b: { fontSize: '0.82em' }, c: { fontSize: '1em' } }
                            }, 
                    } ]
                }
                this.chart.setOption(this.option)

                rej(0)
            })
        }
    },
    mounted() {
        setTimeout(e => {
            const dom = document.getElementById('chrt_pay_ring')
            if (dom) {
                this.chart = echarts.init( dom )
                this.reset(null)
            }
        }, 10)
    }
}
// [ '现金', '转账', 'Paypal', 'Alipay HK', 'EPS', 'WeChat Pay HK', 'Pay ME' ]
</script>

<style lang="sass" scoped>
#chrt_pay_ring
    min-height: 30em !important
</style>