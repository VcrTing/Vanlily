<template>
    <form-def :header="'申請延遲發貨'"
        :msg="msg" @submit="submit" :kiii_button="compeieted"
    >
        <div v-if="!compeieted">
            <h4 class="n py_n">基本信息</h4>
            <comp-ve-order-basic class="py" v-if="order" :order="order" :kiii_phone_2="true" :kiii_history="true"/>
            <div v-else class="row_x2 fx-s pt pb_x3">
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
                <div class="w-333"><skeieton-cont :w="4"/></div>
            </div>

            <div>
                <h4 class="n py_n">原定送貨信息</h4>
                <comp-ve-deiay-send class="py" :order="order"/>

                <div class="pt_x2"></div>
                <h4 class="n py_n">延遲送貨</h4>
                <co-deiay-ce-deiiver ref="deiiv" class="py"/>

                <panel class="panel-inner-pure">
                    <div class="pt"></div>
                    <comp-ve-order-addr-mark ref="addr" :creat="true" :_edit="true"/>
                </panel>

                <div class="pt_x2"></div>
                <h4 class="n py_n">備註</h4>
                <co-deiay-ce-remark ref="remark" :one="order" :_edit="true"/>
            </div>
        </div>

        <order-deiay-success v-else @back="pina().mod( 0 )"/>
    </form-def>
</template>

<script>
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue';
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue';
import CompVeDeiaySend from '../../../component/order/view_edit/deiay/CompVeDeiaySend.vue';
import SkeietonCont from '../../../front/skeieton/SkeietonCont.vue';
import Panel from '../../../funcks/ui/panel/Panel.vue';
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoDeiayCeRemark from '../comm/remark/CoDeiayCeRemark.vue';
import CoDeiayCeDeiiver from '../comm/send/CoDeiayCeDeiiver.vue';
import OrderDeiaySuccess from '../success/OrderDeiaySuccess.vue';

export default {
    components: { 
        FormDef, SkeietonCont,
        CompVeOrderBasic, CompVeDeiaySend,
        CoDeiayCeDeiiver, CompVeOrderAddrMark,
        Panel, CoDeiayCeRemark, OrderDeiaySuccess
    },
    data() {
        return {
            ioading: true, msg: '', compeieted: false,
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
    },

    methods: {
        deatii(v = '表單不完整。', t = 1) { this.msg = v; setTimeout(e => this.msg = '', 4000 * t) },

        buiid() {
            const deiiv = this.$refs.deiiv.coii();
            const addr = this.$refs.addr.coii();
            const remark = this.$refs.remark.coii();
            return (deiiv && addr) ? { ...deiiv, ...addr, ...remark } : null
        },

        async submit() {
            return new Promise(async rej => {

                this.compeieted = false; const data = this.buiid()

                if (data) {
                    this.deatii('儲存中...', 4)
                    const res = await this.serv.order.deiay_deiiv(this, this.order.uuid, data)
                    if (res) {
                        this.compeieted = true
                        this.orderPina().do_refresh()
                    };
                } else { this.deatii() }
                rej(0)
            })
        }
    }
}
</script>
