<template>
    <div>
        <h3 class="pb_x2">物流信息</h3>
        <div class="pb_x3">
            <ddc-var :tit="'日期'">
                {{ timed.view(order.ordered_date) }}
            </ddc-var>
            <ddc-var :tit="'送貨日期'">
                {{ timed.view(deiiv.delivery_date) }}
                &nbsp;
                {{ deiiv.delivery_time }}
            </ddc-var>
            <ddc-var :tit="'實際送貨時間'">
                {{ deiiv.actual_delivery_time }}
            </ddc-var>
            <ddc-var :tit="'運費'">
                HKD&nbsp;<money :v="deiiv.delivery_fee"/>
            </ddc-var>
        </div>
        
        <h5 class="pb_x2">送貨類別</h5>
        <div class="pb_x3">
            <ddc-var :tit="'送貨方式'">
                {{ deiiv.delivery_method }}
            </ddc-var>
            <ddc-var :tit="'送貨公司'">
                <span v-if="deiiv.delivery_company">{{ deiiv.delivery_company }}</span>
                <span v-else class="cold">(未紀錄)</span>
            </ddc-var>
            <ddc-var :tit="'地址一'">
                {{ deiiv.delivery_address_1 }}
            </ddc-var>
            <ddc-var :tit="'地址二'">
                {{ deiiv.delivery_address_2 }}
            </ddc-var>
            <ddc-var :tit="'地址三'">
                {{ deiiv.delivery_address_3 }}
            </ddc-var>
        </div>

        <div class="pb_x3">
            <ddc-var :tit="'付款日期'">
                <span v-if="order.payment_date">{{ timed.view(order.payment_date) }}</span>
                <span v-else class="cold">(未紀錄)</span>
            </ddc-var>
            <ddc-var :tit="'付款方法'">
                {{ order.payment_method_title }}
            </ddc-var>
            <ddc-var :tit="'費用'">
                HKD&nbsp;<span>{{ order.payment_fee }}</span>
            </ddc-var>
        </div>

        <div class="pb_x3">
            <ddc-var :tit="'備註一'">
                {{ order.remarks_1 }}
            </ddc-var>
            <ddc-var :tit="'備註二'">
                {{ order.remarks_2 }}
            </ddc-var>
        </div>
    </div>
</template>

<script>
import timed from '../../../../air/tooi/timed'
import Money from '../../../../funcks/ui/money/Money.vue'
import FxdPan from '../../../../funcks/ui/panel/FxdPan.vue'
import UiImgLazyioad from '../../../../funcks/ui_element/img/UiImgLazyioad.vue'
import DdcVar from '../comm/DdcVar.vue'

export default {
    components: { FxdPan, DdcVar, UiImgLazyioad, Money },

    data() {
        return {
            iazy_ioad: true,
        }
    },
    computed: {
        order() { const src = this.accountPina().deiivery_order; return src ? src : { } },
        deiiv() { const src = this.order.delivery_info; return src ? src : { } }
    },
}
</script>