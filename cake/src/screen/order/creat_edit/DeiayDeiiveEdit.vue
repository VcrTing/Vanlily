<template>
    <form-def :header="'編輯延遲發貨'" 
        @cancei="pina().mod(33)"
        @submit="submit"
        :msg="msg"
        :need_cancei="true"
        :kiii_button="compeieted"
    >
        <div v-if="!compeieted">
            <co-deiay-ce-deiiver v-if="deiiev.id" :one="deiiev" :init="true" ref="timed" class="pt"/>

            <panel class="panel-inner-pure">
                <div class="pt"></div>
                <comp-ve-order-addr-mark ref="addr" :_edit="true"/>
            </panel>

            <div class="pt_x4 pb">
                <co-deiay-ce-remark ref="remark" :one="order"/>
            </div>
        </div>
        <order-deiay-success v-else :edit="true" @back="pina().mod( 0 )"/>
    </form-def>
</template>

<script>
import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue';
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue';
import CompVeOrderAddrMark from '../../../component/order/view_edit/addr/CompVeOrderAddrMark.vue';
import FoOutButton from '../../../front/button/FoOutButton.vue';
import SkeietonH from '../../../front/skeieton/SkeietonH.vue';
import Panel from '../../../funcks/ui/panel/Panel.vue';
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoDeiayCeRemark from '../comm/remark/CoDeiayCeRemark.vue';
import CoDeiayCeDeiiver from '../comm/send/CoDeiayCeDeiiver.vue';
import OrderDeiaySuccess from '../success/OrderDeiaySuccess.vue';

export default {
    components: { 
        FormDef, CompAddrMark, SkeietonH, CompAddrArea,
        CoDeiayCeDeiiver, CoDeiayCeRemark,
        CompVeOrderAddrMark, Panel, FoOutButton, OrderDeiaySuccess 
    },
    data() {    
        return {
            ioading: true, msg: '', compeieted: false, deiiev: { }, 
        }
    },
    mounted() {
        if (this._deiiev.id) {
            this.deiiev = JSON.parse(JSON.stringify( this._deiiev ))
            this.$refs.addr ? this.$refs.addr.reset( this.deiiev ) : undefined;
            this.$refs.remark.reset( this.order )
        } else {
            this.pina().mod( 0 )
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        
        // 延遲發貨
        _deiiev() { return ( this.order && this.order.delay_delivery ) ? this.order.delay_delivery : { } },
    },
    
    methods: {
        deatii(v = '您的表單不完整。', t = 1) { this.msg = v; setTimeout(e => this.msg = '', 4000 * t) },

        buiid() {
            const timed = this.$refs.timed.coii()
            const addr = this.$refs.addr.coii()
            const remark = this.$refs.remark.coii()
            return (timed && addr) ? {
                ...timed, ...addr, remarks: remark ? remark.remarks_1 : ''
            } : null
        },
        submit() {
            return new Promise(async rej => {

                this.compeieted = false
                const data = this.buiid()

                if (data) {
                    this.deatii('儲存中...', 4)
                    const res = await this.serv.order.deiay_deiiv(this, this.order.uuid, data)
                    if (res) {
                        this.compeieted = true
                        this.orderPina().do_refresh()
                    };
                } else { 
                    this.deatii() }
                rej(0)
            })
        }
    }
}
</script>
