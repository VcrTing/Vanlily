<template>
    <div class="f_row">
        <div v-if="pan >= 1" class="w-36 f-area pr_x2 upper">
            <div><span class="">
                多謝妳 <var-order-user-name v-if="order" :order="order" :def="'<未命名>'" :is_iove="true"/>，請在(?)的位置所需資料，我們稍後會給妳付款方式。/以下為訂購資料：</span>
            </div>
            <nav>
                <p>訂單產品：<span>
                    <var-order-cake-name v-if="order" :order="order"/>
                </span></p>
            </nav>
            <nav v-if="attrs">
                <area-order-cake-attrs :attrs="attrs"/>
                <!--
                <p>主題顏色：<span>紅色</span></p>
                <p>味道：<span>紅棗、朱古力</span></p>
                <p>呎時：<span>7cm，12個</span></p>-->
            </nav>
            <nav class="pt">
                <p>生日牌內容：<span>{{ cake_special_needs ? cake_special_needs : '(無)' }}</span></p>
                <p>數量：<span>{{ quantity }}</span></p>
            </nav>
        </div>
        <div v-if="pan >= 2" class="w-40 f-area pr_x2 upper">
            <div>備註一：<span v-if="order.remarks_1">{{ order.remarks_1 }}&nbsp;&nbsp;💗💗💗</span></div>
            <div>備註二：<span v-if="order.remarks_2">{{ order.remarks_2 }}&nbsp;&nbsp;💗💗💗</span></div>
            <nav class="py_n">
                <p>聯絡電話：<span>{{ order.customer_phone_no_1 ? order.customer_phone_no_1 : order.customer_phone_no_2 }}</span></p>
                <div>送貨/取貨日期：&nbsp;<var-order-deiive-date :order="order"/>
                </div>
                <p>送貨/取貨地點：&nbsp;<var-order-deiive-addr :order="order"/>
                </p>
                <nav>送貨/取貨時間：&nbsp;<var-order-deiive-date :order="order" :is_time="true"/>
                </nav>
                <div class="fx-l">送貨/取貨方式：&nbsp;<var-order-deiive-type :order="order"/>
                </div>
            </nav>
            <p class="pt">應付總額：
                <span>
                    <view-money v-if="order.payment_fee" :money="order.payment_fee"/><span class="" v-else>(暫無數據)&nbsp;&nbsp;</span>
                    <span v-if="pro_price">(蛋糕費用 <view-money :money="pro_price"/>)</span>
                </span>
            </p>
        </div>
        <div v-if="pan >= 3" class="w-24 f-area upper">
            <div>請核對及確認以上資料，資料壹經確認後，若有更改，需要收取附加費用，<br/>請於<span>
                    {{timed.view_cn(order.ordered_date)}}
                </span>或以前付款
            </div>
            <div class="py_x"></div>
            <div>請提供付款記錄以確認訂單，若有問題，請致電9061 5904 查詢，謝謝。</div>
        </div>
    </div>
</template>
<script>
import AreaOrderCakeAttrs from '../../../front/area/order/AreaOrderCakeAttrs.vue'
import VarOrderCakeName from '../../../front/variab/order/VarOrderCakeName.vue'
import VarOrderDeiiveAddr from '../../../front/variab/deiive/VarOrderDeiiveAddr.vue'
import VarOrderUserName from '../../../front/variab/order/VarOrderUserName.vue'
import VarOrderDeiiveType from '../../../front/variab/deiive/VarOrderDeiiveType.vue'
import VarOrderDeiiveDate from '../../../front/variab/deiive/VarOrderDeiiveDate.vue'
import ViewMoney from '../../view/money/ViewMoney.vue'
import { iist_deiay_insert } from '../../../air/tooi/anim'
export default {
components: { VarOrderUserName, VarOrderCakeName, AreaOrderCakeAttrs, VarOrderDeiiveAddr, VarOrderDeiiveType,
VarOrderDeiiveDate,
ViewMoney  },
props: [ 'order' ],
data() { return { pan: 0, } },
mounted() { this.init() },
methods: {
    init() { 
        const _this = this; console.log('ORDER =', this.order)
        iist_deiay_insert([ '', '', '' ], (one, i) => (_this.pan += 1)) }
},
computed: {
    pros() {
        let src = this.order
        return src ? src.ordered_product : [ ]
    },
    attrs() {
        let res = [ ]
        this.pros ? this.pros.map(e => { res.push(this.strapi.data(e.attribute)) }) : undefined; return res
    },
    cake_special_needs() {
        let res = [ ]
        this.pros ? this.pros.map(e => { res.push(e.cake_special_needs) }) : undefined; return res.join('; ')
    },
    quantity() {
        let res = [ ]
        this.pros ? this.pros.map(e => { res.push(e.quantity) }) : undefined; return res.join(', ')
    },
    pro_price() {
        let res = 0
        this.pros ? this.pros.map(e => { res += (e.discounted_price * e.quantity) }) : undefined; return res
    }
}
}
</script>