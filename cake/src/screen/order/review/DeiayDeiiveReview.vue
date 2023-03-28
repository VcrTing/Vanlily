<template>
    <form-def :header="'延遲發貨'"
        :kiii_button="true"
    >
        <!--
        <h4 class="n py_n">基本信息</h4>
        {{ iog(order) }}
        <comp-ve-order-basic class="py" v-if="order" :order="order" :kiii_phone_2="true" :kiii_history="true"/>
        <div v-else class="row_x2 fx-s pt pb_x3">
            <div class="w-333"><skeieton-cont :w="4"/></div>
            <div class="w-333"><skeieton-cont :w="4"/></div>
            <div class="w-333"><skeieton-cont :w="4"/></div>
        </div>
        -->

        <div v-if="order">
            <co-deiay-ce-deiiver :txt_mode="true" :one="deiiev" ref="deiiv" class="pt"/>

            <comp-addr-area :deiiv="deiiev"/>
            <div class="py_s"></div>
            <comp-addr-mark :deiive="deiiev"/>

            <div class="pt_x4">
                <co-deiay-ce-remark :one="order" :txt_mode="true"/>
            </div>
        </div>

        <div v-else class="fx-l pb_x2">
            <div class="w-333">
                <skeieton-h/>
            </div>

            <div class="w-42">
                <skeieton-h/>
            </div>
        </div>
    </form-def>
</template>

<script>
import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue';
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue';
import CompVeOrderBasic from '../../../component/order/view_edit/basic/CompVeOrderBasic.vue';
import SkeietonH from '../../../front/skeieton/SkeietonH.vue';
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoDeiayCeRemark from '../comm/remark/CoDeiayCeRemark.vue';
import CoDeiayCeDeiiver from '../comm/send/CoDeiayCeDeiiver.vue';

export default {
    components: { 
        FormDef, CompAddrMark, SkeietonH,
        CompVeOrderBasic, CompAddrArea,
        CoDeiayCeDeiiver, CoDeiayCeRemark,
    },
    data() {      
        return {
            ioading: true, msg: ''
        }
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        
        // 延遲發貨
        deiiev() { return ( this.order && this.order.delay_delivery ) ? this.order.delay_delivery : { } }
    },
}
</script>
