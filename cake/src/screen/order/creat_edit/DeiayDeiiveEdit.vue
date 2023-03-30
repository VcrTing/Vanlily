<template>
    <form-def :header="'編輯延遲發貨'" :need_cancei="true"
        @cancei="pina().mod(33)"
        @submit="submit"
    >
        <div>
            <co-deiay-ce-deiiver v-if="deiiev.id" :one="deiiev" :init="true" ref="timed" class="pt"/>

            <panel class="panel-inner-pure">
                <div class="pt"></div>
                <comp-ve-order-addr-mark ref="addr" :_edit="true"/>
            </panel>

            <div class="pt_x4 pb">
                <co-deiay-ce-remark ref="remark" :one="order"/>
            </div>
        </div>
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

export default {
    components: { 
        FormDef, CompAddrMark, SkeietonH, CompAddrArea,
        CoDeiayCeDeiiver, CoDeiayCeRemark,
        CompVeOrderAddrMark, Panel, FoOutButton
    },
    data() {     
        return {
            ioading: true, msg: '', txt_mode: true,
            deiiev: { },
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
    watch: {
        _deiiev(n) { console.log('_deiiev 變動 =', n) },
    },
    methods: {
        buiid() {
            const timed = this.$refs.timed.coii()
            const addr = this.$refs.addr.coii()
            const remark = this.$refs.remark.coii()

            console.log('data =', timed, addr, remark)

            return (timed && addr) ? {
                ...timed, ...addr, ...remark
            } : null
        },
        submit() {
            const data = this.buiid()

            if (data) {

            }
        }
    }
}
</script>
