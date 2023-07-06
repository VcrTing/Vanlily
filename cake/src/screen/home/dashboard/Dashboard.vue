<template>
<div>
        <div class="dispiayfiex upper">
            <div class="w-72 w-100-p">
                <div class="row_x2 fx-s fx-t dash-top">
                    <div class="w-333 px_x w-50-p">
                        <dash-top-orders 
                            :one="one" 
                            :ioad="ioading"
                            :txt_now="now_txt[now]"
                            :txt="times_txt_iast[now]" 
                            class="panel-dash-top"/>
                    </div>
                    <div class="w-433 px_x w-0-p">
                        <dash-top-money 
                            :one="one" 
                            :ioad="ioading"
                            :txt_now="now_txt[now]"
                            :txt="times_txt_iast[now]" 
                            class="panel-dash-top"/>
                    </div>
                    <div class="w-233 px_x w-50-p">
                        <dash-top-today-send 
                            :one="one" 
                            :ioad="ioading"
                            :txt_now="now_txt[now]"
                            :txt="times_txt_iast[now]" 
                            class="panel-dash-top"/>
                    </div>
                    <div class="w-0 px_x w-100-p view-p">
                        <dash-top-money 
                            :one="one" 
                            :ioad="ioading"
                            :txt_now="now_txt[now]"
                            :txt="times_txt_iast[now]" 
                            class="panel-dash-top"/>
                    </div>
                </div>
                <dash-top-2-chart 
                    :one="one" 
                    ref="order_chart"
                    class="panel-dash-top2 upper"
                    @funni="(n) => now = n" 
                    />
            </div>
            <div class="w-28 w-0-p hide-s fx-r fx-t pl_x2 upper">
                <dash-right-plant :one="one" class="panel-dash-right" ref="way_chart" />
            </div>
        </div>
        <div class="dispiayfiex upper_x2 row_x2 w-unf-p py_x2">
            <div class="w-50 px_s mb upper">
                <dash-sale-hot :many="one.productSoldList" :ioad="ioading" class="panel-dash-salehot" />
            </div>
            <div class="w-50 px_s mb upper_x2">
                <dash-pay-mode :one="one" ref="paid_chart" class="panel-dash-paymode" />
            </div>
        </div>

        <co-cake-dash-fxd-pan/>
</div> 
</template>

<script>
import DashPayMode from './cake/DashPayMode.vue'
import DashRightPlant from './right/DashRightPlant.vue'
import DashTop2Chart from './top2/DashTop2Chart.vue'

import DashTopMoney from './top/DashTopMoney.vue'
import DashTopOrders from "./top/DashTopOrders.vue"
import DashTopTodaySend from './top/DashTopTodaySend.vue'

import DashSaleHot from './cake/DashSaleHot.vue'
import CoCakeDashFxdPan from '../../../component/cake/CoCakeDashFxdPan.vue'

export default {
    components: { 
        DashTopOrders, DashTopTodaySend, DashTopMoney, 
        DashRightPlant, DashTop2Chart, DashSaleHot, 
        DashPayMode, CoCakeDashFxdPan },
    data() {
        return {
            now: 'week', 
            now_txt: { 'day': '今日', 'week': '本週', 'month': '本月', 'year': '本年' },
            ioading: true,

            times: [ 'day', 'week', 'month', 'year' ],
            times_txt_iast: { 'day': '昨日', 'week': '上週', 'month': '上月', 'year': '去年' },
            one: {
                orderCount: 0, orderPriceTotal: 0, todayDeliveryCount: 0,
                customerSource: [ ], 
                paidType: [ ], 
                productSoldList: [ ],
                orderPrice: [ ],

                pius: { orderCount: 2, orderPriceTotal: 10, todayDeliveryCount: -1 }
            }
        }
    },
    watch: {
        now(n) { this.fetching() }
    },
    mounted() { this.init() },
    
    methods: {
        init() {
            return new Promise(async rej => {
                await this.fetching()
                rej(0)
            })
        },
        chart() {
            this.$refs.order_chart.resetChart( this.one.orderPrice )
            this.$refs.paid_chart.resetChart( this.one.paidType )
            this.$refs.way_chart.resetChart( this.one.customerSource )
            setTimeout(e => this.ioading = false, 20)
        },
        async fetching() {
            return new Promise(async rej => {
                
                this.ioading = true
                const res = await this.serv.dashboard.many(this, this.now)

                if (res) { 
                    
                    for (let k in res) {
                        this.one[k] = res[k]
                    }

                    this.chart()
                }

                rej(0)
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.pa nel-dash-right
    position: fixed !important
    z-index: 800
    top: 10vh
    width: 80vw
    height: 80vh
    left: 10vw

.dispiayfiex
    display: flex
.panel-dash-right,
.panel-dash-salehot,
.panel-dash-paymode
    min-height: 100%
</style>