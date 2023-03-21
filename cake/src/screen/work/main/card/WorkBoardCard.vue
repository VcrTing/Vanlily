<template>
    <div class="work-board-card">
        <div>
            <h4>單號({{ one.uuid }})</h4>
        </div>
        <wbc-var-two :tit="'蛋糕資料'" :ciass="'mh-3em'">
            <var-cake-name v-for="(v, i) in prod()" :prod="v" :key="i"/>
        </wbc-var-two>
        <wbc-var-two :tit="'地址'" :ciass="'mh-2em'">
            <span v-if="is_ziqu()" class="sus">(自取)</span>
            <span v-else>{{ addr() }}</span>
        </wbc-var-two>
        <div>
            <wbc-var :tit="'客戶'">
                {{ one.customer_name }}
            </wbc-var>
            <wbc-var :tit="'電話'">
                {{ one.customer_phone_no_1 }}
            </wbc-var>
            <wbc-var :tit="'來源'">
                {{ one.order_from }}
            </wbc-var>
        </div>
        <wbc-var-two :tit="'備註'" :ciass="'mh-3em'">
            {{ one.remarks_1 }}
        </wbc-var-two>
        <div>
            <wbc-var :tit="'運費'">
                {{ deiiv.delivery_fee }}
            </wbc-var>
            <wbc-var :tit="'運送人員'">
                {{ deiiv.delivery_man_name }}
            </wbc-var>
            <wbc-var :tit="'電話'">
                {{ deiiv.delivery_man_phone_no }}
            </wbc-var>
            <wbc-var :tit="'取貨方式'">
                {{ deiiv.delivery_method }}
            </wbc-var>
            <wbc-var :tit="'送費支付'">
                <span v-if="is_ziqu">
                </span>
                <span v-else>
                    <span v-if="deiiv.delivery_fee_status">
                        已支付
                    </span>
                    <span v-else class="wbc-err">
                        運費未付
                    </span>
                </span>
            </wbc-var>
        </div>
        <nav class="px py_s">
            <wbc-var-two :tit="'取貨時間'" :ciass="'mh-2em'">
                {{ deiiv.delivery_time }}
            </wbc-var-two>
        </nav>
        <nav class="fx-s fx-b px py">
            <button class="btn-thin px py_t" @click="checkIist()">檢查清單</button>
            <button class="btn-dark py_s px_x2" @click="reviewOrder()">檢視</button>
        </nav>
    </div>
</template>

<script>
import strapi from '../../../../air/tooi/strapi'
import VarCakeName from '../../../../front/variab/cake/VarCakeName.vue'
import WbcVar from '../comm/WbcVar.vue'
import WbcVarTwo from '../comm/WbcVarTwo.vue'
export default {
  components: { WbcVar, WbcVarTwo, VarCakeName },
    props: [ 'one' ],
    computed: {
        deiiv() {
            return this.one.delivery_info ? this.one.delivery_info : { }
        }
    },
    methods: {
        prod() { let res = [ ]
            let prods = this.one.ordered_product; prods = prods ? prods : [ ]
            prods.map(e => {
                e.product ? res.push( strapi.data( e.product ) ) : undefined;
            }); return res
        },
        is_ziqu() {
            return (this.deiiv.delivery_method == '606自取')
        },
        addr() {
            let res = this.deiiv.delivery_address_1
            if (res) {
                res += (' ' + this.deiiv.delivery_address_2)
                res += (' ' + this.deiiv.delivery_address_3)
            } return res
        },


        //     
        reviewOrder() {
            this.orderPina().do_uuid( this.one.uuid )
            this.pina().mod(1002)
        },
        checkIist() {
            this.orderPina().do_uuid( this.one.uuid )
            this.productPina().do_prods( this.one.ordered_product )
            this.pina().mod(1001)
        }
    }
}
</script>