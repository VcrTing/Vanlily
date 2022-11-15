<template>
<div>

    <div>
        <div class="fx-s fx-t">
            <div class="w-72 w-100-p">
                <div class="row_x2 fx-s fx-t dash-top">
                    <div class="w-333 px_x w-50-p">
                        <dash-top-orders class="panel-dash-top"></dash-top-orders>
                    </div>
                    <div class="w-433 px_x w-0-p">
                        <dash-top-money class="panel-dash-top"></dash-top-money>
                    </div>
                    <div class="w-233 px_x w-50-p">
                        <dash-top-today-send class="panel-dash-top"></dash-top-today-send>
                    </div>
                    <div class="w-0 px_x w-100-p view-p">
                        <dash-top-money class="panel-dash-top"></dash-top-money>
                    </div>
                </div>
                <dash-top-2-chart class="panel-dash-top2"></dash-top-2-chart>
            </div>
            
            <div class="w-28 w-0-p hide-s fx-r fx-t pl_x2">
                <dash-right-plant class="panel-dash-right"></dash-right-plant>
            </div>
        </div>
        <div class="fx-s fx-t row_x2 w-unf-p py_x2">
            <div class="w-50 px_s mb_x2">
                <dash-sale-hot class="panel-dash-salehot"></dash-sale-hot>
            </div>
            <div class="w-50 px_s">
                <dash-pay-mode class="panel-dash-paymode"></dash-pay-mode>
            </div>
        </div>
    </div>
</div> 
</template>

<script>
import DashPayMode from './cake/DashPayMode.vue'
import DashSaleHot from './cake/DashSaleHot.vue'
import DashUserForm from './cake/DashUserForm.vue'
import DashRightPlant from './right/DashRightPlant.vue'
import DashTopMoney from './top/DashTopMoney.vue'
import DashTopOrders from "./top/DashTopOrders.vue"
import DashTopTodaySend from './top/DashTopTodaySend.vue'
import DashTop2Chart from './top2/DashTop2Chart.vue'

export default {
    components: { DashTopOrders, DashTopTodaySend, DashTopMoney, DashRightPlant, DashTop2Chart, DashSaleHot, DashPayMode, DashUserForm },
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
</style>