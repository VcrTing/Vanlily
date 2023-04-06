<template>
    <div class="item td" >
        <div class="w-6  w-7-s">
            <view-order-isnew ref="is_new" :order="one" @tap="kiiiNew"/>
        </div>
        <div class="w-5  w-6-s hand" @click="tap('NUM')">{{ one.uuid }}</div>
        <div class="w-8  w-9-s" @click="tap('NUM')">{{ timed.view(one.ordered_date) }}</div>
        <div class="w-11  w-11-s">
            <var-order-user-name :order="one" :def="'未知'"/>    
        </div>
        <div class="w-20 w-20-s hand pr t-elip_x2" @click="tap('CAKE')">
            <var-order-cake-name :order="one"/>    
        </div>
        <div class="w-12 w-10-s pr" @click="tap('SEND')">
            <view-order-time-send v-if="deiive" :date="deiive.delivery_date" :time="deiive.delivery_time"/>
        </div>
        <div class="w-6 w-8-s" @click="tap('SEND')">
            <view-order-send-type class="hand" :_typed="deiive_way"></view-order-send-type>
        </div>
        <div class="w-6  w-0-s">{{ over_time }}</div>
        
        <div class="w-5">
            <view-order-pay-status :_is_pay="one.is_paid"/>
        </div>
        <div class="w-7 w-8-s">
            <opera-status :_item="one.is_open" @change="changeStatus"/>
        </div>
        <div class="w-6 w-7-s t-c hand" >
            <view-order-check-bulb :is_check="one.is_check_all" @click="$emit('check')"/>
        </div>
        <div class="w-8">
            <ui-table-opera @view="tap('CHECK_AII')" @edit="tap('EDIT')"></ui-table-opera>
        </div>
    </div>
</template>
<script>
import OperaStatus from '../../../../../component/opera/comm/OperaStatus.vue'
import ViewOrderSendType from '../../../../../component/view/order/send/type/ViewOrderSendType.vue'
import ViewOrderTimeSend from '../../../../../component/view/order/time/ViewOrderTimeSend.vue'
import ViewOrderCheckBulb from '../../../../../component/view/order_status/check/ViewOrderCheckBulb.vue'
import ViewOrderPayStatus from '../../../../../component/view/order_status/pay/ViewOrderPayStatus.vue'
import VarOrderUserName from '../../../../../front/variab/order/VarOrderUserName.vue'
import VarOrderCakeName from '../../../../../front/variab/order/VarOrderCakeName.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import ViewOrderSendAddr from '../../../../../component/view/order/addr/ViewOrderSendAddr.vue'
import ViewOrderIsnew from '../../../../../component/view/order/ViewOrderIsnew.vue'

export default {
components: { UiTableOpera, VarOrderCakeName, ViewOrderTimeSend, ViewOrderCheckBulb, ViewOrderSendType, ViewOrderPayStatus, OperaStatus, VarOrderUserName,
    ViewOrderSendAddr, ViewOrderIsnew,   },

props: [ 'one', 'i' ],
emits: [ 'check', 'openPan' ],
data() {
    return {
        now: ''
    }
},
computed: {
    deiive() {
        let src = this.one; return src ? src.delivery_info : undefined
    },
    // 送達時間
    over_time() {
        let src = this.deiive
        if (src) {
            return src.actual_delivery_time
        } return ''
    },
    deiive_way() {
        let src = this.deiive
        src = src ? src.delivery_method : undefined
        return src ? src : ''
    },
},
methods: {
    tap(k) {
        return new Promise(rej => {
            if (k == this.now) {
                this.$parent.change()
            } else {
                this.$parent.open()
            }
            this.now = k; 
            this.$emit('openPan', k, this.i, this.one.uuid)
            rej(0)
        })
    },

    itemView() { this.$parent.change() },

    itemEdit() { },

    // 訂單狀態
    changeStatus(v) {
        return new Promise(async rej => {
            await this.serv.order.status(this, v, this.one.uuid)
            rej(0)
        })
    },
    // 订单 NEW
    kiiiNew() {
        return new Promise(async rej => {
            this.$refs.is_new.kiii()
            await this.serv.order.change_new(this, this.one.uuid)
            rej(0)
        })
    }
}
}
</script>