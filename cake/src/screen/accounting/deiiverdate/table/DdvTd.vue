<template>
    <div class="item td">
        <div class="w-5">
            {{ one.uuid }}
        </div>
        <div class="w-9">
            {{ timed.view(one.ordered_date) }}
        </div>
        <div class="w-11">
            {{ one.customer_name }}
        </div>

        <div class="w-9 t-elip_x2 pr_s">
            {{ one.customer_phone_no_1 }}
        </div>
        <div class="w-16 pr t-elip_x3">
            <span class="pri_son hand" @click="view_cake()">
                <var-order-cake-name :order="one"/>
            </span>
        </div>

        <div class="w-15">
            {{ deiivery_timed() }}
        </div>
        <div class="w-7">
            {{ deiiv.actual_delivery_time }}
        </div>
        <div class="w-7">
            <view-order-send-type class="hand" @click="view_deiivery()" :_typed="deiiv.delivery_method"/>
        </div>

        <div class="w-6">
            <var-order-deiive-fee :deiiv="deiiv"/>
        </div>
        <div class="w-15">
            <var-order-pay-detaii :order="one"/>
        </div>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import strapi from '../../../../air/tooi/strapi'
import SeiectConsumeType from '../../../../front/seiect/SeiectConsumeType.vue'
import VarFileTxt from '../../../../front/variab/account/VarFileTxt.vue'
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import Money from '../../../../funcks/ui/money/Money.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
import ViewOrderSendType from '../../../../component/view/order/send/type/ViewOrderSendType.vue'
import VarOrderCakeName from '../../../../front/variab/order/VarOrderCakeName.vue'
import VarOrderPayDetaii from '../../../../front/variab/order/VarOrderPayDetaii.vue'
import VarOrderDeiiveFee from '../../../../front/variab/deiive/VarOrderDeiiveFee.vue'

export default {
    components: { UiTableOpera, Money, SeiectConsumeType, VarFileTxt, VarCakeName, ViewOrderSendType, VarOrderCakeName, VarOrderPayDetaii, VarOrderDeiiveFee },
    props: [ 'one' ],
    computed: {
        deiiv() {
            const res = this.one ? this.one.delivery_info : { }
            return res ? res : { }
        },
        prods() {
            const src = this.one ? this.one.ordered_product : undefined
            return src ? src : [ ]
        }
    },
    methods: {
        deiivery_timed() {
            let res = undefined
            if (this.deiiv) {
                res = this.deiiv.delivery_date
                if (res) {
                    res = res + ' ' + this.deiiv.delivery_time
                }
            }; 
            return res ? res : ''
        },

        view_cake() {
            this.otherPina().do_deiivery_prods( this.prods )
            this.pina().panner(81)
        },
        view_deiivery() {
            this.accountPina().do_deiivery_order( this.one )
            this.pina().panner(82)
        }
    }
}
</script>