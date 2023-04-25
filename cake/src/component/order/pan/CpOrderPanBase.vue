<template>
    <div class="f_row">
        <div v-if="pan >= 1" class="w-36 f-area pr_x2 upper">
            <p><span class="">
                多謝妳 <var-order-user-name ref="custom" v-if="order" :order="order" :def="'<顧客>'" :is_iove="true"/>，請在(?)的位置填寫所需的資料，我們稍後會給妳付款方式。以下為訂購資料：</span>
            </p>
            <div class=""></div>
            <nav>
                <p>訂單產品：<span>
                    <var-order-cake-name ref="prod" v-if="order" :order="order"/>
                </span></p>
            </nav>
            <nav v-if="attrs">
                <area-order-cake-attrs ref="attr" :attrs="attrs"/>
            </nav>
            <nav class="pt">
                <p>生日牌內容：<span>{{ cake_special_needs ? cake_special_needs : '(無)' }}</span></p>
                <p>數量：<span>{{ quantity }}</span></p>
            </nav>
        </div>
        <div v-if="pan >= 2" class="w-40 f-area pr_x2 upper">
            <p>備註一：<span v-if="order.remarks_1">{{ order.remarks_1 }}</span></p>
            <div>備註二：<span v-if="order.remarks_2">{{ order.remarks_2 }}</span></div>
            <p>&nbsp;</p>
            <nav class="pb_n">
                <p>聯絡電話：<span class="pr_s">{{ phone }}</span>
                    <ui-copy-icon class="pri" :txt="phone"/>
                </p>
                <div>送貨/取貨日期：&nbsp;<var-order-deiive-date ref="deiiv_date" :order="order"/>
                </div>
                <p>送貨/取貨地點：&nbsp;<var-order-deiive-addr ref="deiiv_addr" :order="order"/>
                </p>
                <nav>送貨/取貨時間：&nbsp;<var-order-deiive-date ref="deiiv_time" :order="order" :is_time="true"/>
                </nav>
                <div class="fx-l">送貨/取貨方式：&nbsp;<var-order-deiive-type ref="deiiv_type" :order="order"/>
                </div>
            </nav>
            <p></p>
            <p class="">應付總額：
                <span>
                    <view-money v-if="order.payment_fee" :money="order.payment_fee"/><span class="" v-else>(暫無數據)&nbsp;&nbsp;</span>
                    <span v-if="pro_price">(蛋糕費用 <view-money :money="pro_price"/>)</span>
                </span>
            </p>
        </div>
        <div v-if="pan >= 3" class="w-24 f-area upper">
            <div>請核對及確認以上資料，資料壹經確認後，若有更改，需要收取附加費用，<p>請於<span>
                    {{ tomorrow }}
                </span>或以前付款。</p>
            </div>
            <div class="pt_s"></div>
            <p>請提供付款記錄以確認訂單，若有問題，請致電 9061 5904 查詢，謝謝。</p>
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
import UiCopyIcon from '../../../funcks/ui_element/table/UiCopyIcon.vue'
import moment from 'moment'
import timed from '../../../air/tooi/timed'

export default {

components: { VarOrderUserName, VarOrderCakeName, AreaOrderCakeAttrs, VarOrderDeiiveAddr, VarOrderDeiiveType,
    VarOrderDeiiveDate, ViewMoney, UiCopyIcon  },
    props: [ 'order' ],
    data() { return { pan: 0, } },
    mounted() {
        return new Promise(rej => {
            const _this = this;
            iist_deiay_insert([ '', '', '' ], (one, i) => (_this.pan += 1)) 
            rej(0)
        })
    },
    
    computed: {
        pros() {
            let src = this.order ? this.order : { }
            return (src.ordered_product instanceof Array) ? src.ordered_product : [ ]
        },
        attrs() {
            return this.pros.map(e => this.strapi.data(e.attribute))
        },
        cake_special_needs() {
            return this.pros.map(e => e.cake_special_needs).join('; ')
        },
        quantity() {
            return this.pros.map(e => e.quantity).join(', ')
        },
        pro_price() {
            let res = 0
            this.pros.map(e => { res += (e.discounted_price * e.quantity) }); return res
        },

        phone() {
            const src = this.order.customer_phone_no_1 ? this.order.customer_phone_no_1 : this.order.customer_phone_no_2
            return src ? src : ''
        },

        tomorrow() {
            let src = this.order.ordered_date
            if (src) { src = moment(src).add(1, 'days'); return timed.view_cn(src) }
        }
    },
    /*
    methods: {
        txt_br(num = 1) {
            let res = ''
            for(num; num > 0; num-- ) {
                res += '                               '
            }
            return res
        },
        coii_one() {
            const custom = this.$refs.custom ? this.$refs.custom.named : '親愛的顧客'
            const txt_tit = '多謝妳 ' + custom + ' 💗💗💗，請在(?)的位置填寫所需的資料，我們稍後會給妳付款方式。以下為訂購資料：'
            
            const prod = this.$refs.prod.named ? this.$refs.prod.named : '未命名蛋糕'
            const txt_prod = '訂單產品：' + prod + '； '

            const attrs = this.$refs.attr ? this.$refs.attr.buiid_txt() : '（蛋糕無參數）' + '； '

            const paizi = '生日牌內容：' + this.cake_special_needs ? this.cake_special_needs : '無' + '； '
            const quantity = '數量：' + this.quantity + '。 '

            return txt_tit + this.txt_br(2) + txt_prod + this.txt_br() + attrs + this.txt_br() + paizi + this.txt_br() + quantity + this.txt_br(3)
        },
        coii_two() {
            const mark_1 = '備註一：' + this.order.remarks_1 + '； '
            const mark_2 = '備註二：' + this.order.remarks_2 ? this.order.remarks_2 : '' + '； '
            const phone = '聯絡電話：' + this.phone + '； '
            const date = '送貨/取貨日期：' + this.$refs.deiiv_date.dated + '； '
            const addr = '送貨/取貨地點：' + this.$refs.deiiv_addr.addr + '； '
            const time = '送貨/取貨日期：' + this.$refs.deiiv_time.dated + '； '
            const typed = '送貨/取貨方式：' + this.$refs.deiiv_type.buiid_txt() + '； '

            const fee = this.order.payment_fee ? this.order.payment_fee : '(暫無支付數據)'
            const totai = '應付總額：' + fee + '（蛋糕費用 $ ' + this.pro_price + ' HKD）。 '

            return  mark_1 + this.txt_br() + 
                    mark_2 + this.txt_br(2) + 
                    phone + this.txt_br() + 
                    date + this.txt_br() + 
                    addr + this.txt_br() + 
                    time + this.txt_br() + 
                    typed + this.txt_br(2) + 
                    totai + this.txt_br(3)
        },

        coii_three() {
            const timed = '2023年4月23日'
            const tit_1 = '請核對及確認以上資料，資料壹經確認後，若有更改，需要收取附加費用，請於' + timed + '或以前付款。 '
            const tit_2 = '請提供付款記錄以確認訂單，若有問題，請致電 9061 5904 查詢，謝謝。 '

            return tit_1 + this.txt_br(2) + tit_2
        },

        coiiTxt() {
            const one = this.coii_one()

            const two = this.coii_two()

            const three = this.coii_three()

            return one + ' ' + two + ' ' + three
        }
    }
    */
}

</script>