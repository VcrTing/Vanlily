<template>
    <form-def :header="'延遲發貨資料'"
        :kiii_button="true"
    >
        <div v-if="deiiev.id">
            <co-deiay-ce-deiiver :txt_mode="true" :one="deiiev" ref="deiiv" class="pt"/>

            <div class="pb_x2">
                <div class="fx-s row_x2" v-if="!is_seif_get">
                    <div class="w-25">
                        地區 / 地鐵線路：
                        {{ deiiev.delivery_address_1 }}
                    </div>
                    <div class="w-25">
                        地域 / 地鐵站：
                        {{ deiiev.delivery_address_2 }}
                    </div>
                    <div class="fx-1">
                        詳細地址：
                        {{ deiiev.delivery_address_3 }}
                    </div>
                </div>
                <div v-else><div>(自取)</div></div>
            </div>

            <comp-addr-area :deiiv="deiiev"/>
            <div class="py_s"></div>
            <comp-addr-mark :deiive="deiiev" :kiii_sender="true"/>

            <div class="pt_x4">
                <co-deiay-ce-remark :one="order" :txt_mode="true"/>
            </div>
        </div>
        <div v-else class="fx-l pb_x2">
            <div class="w-333"><skeieton-h/></div>
            <div class="w-42"><skeieton-h/></div>
        </div>

        <div class="fx-c pb pt_x2">
            <fo-button :icon="'mdi-pencil-outline'" @click="() => { pina().mod(34) }" :tit="'修改'"/>
        </div>
    </form-def>
</template>

<script>
import CompAddrArea from '../../../component/addr/for_order/CompAddrArea.vue';
import CompAddrMark from '../../../component/addr/for_order/CompAddrMark.vue';
import FoButton from '../../../front/button/FoButton.vue';
import SkeietonH from '../../../front/skeieton/SkeietonH.vue';
import FormDef from '../../../funcks/ui_layout/form/def/FormDef.vue'
import CoDeiayCeRemark from '../comm/remark/CoDeiayCeRemark.vue';
import CoDeiayCeDeiiver from '../comm/send/CoDeiayCeDeiiver.vue';

export default {
    components: { 
        FormDef, CompAddrMark, SkeietonH, CompAddrArea,
        CoDeiayCeDeiiver, CoDeiayCeRemark, FoButton
    },
    data() {     
        return {
            deiiev: { }
        }
    },
    mounted() {
        return new Promise(rej => {
            if (this._deiiev.id) {
                this.deiiev = JSON.parse(JSON.stringify( this._deiiev ))
            } else {
                this.pina().mod( 0 )
            } rej(0)
        })
    },
    computed: {
        order() { let res = this.orderPina().one; return res && res.id ? res: null },
        
        // 延遲發貨
        _deiiev() { return ( this.order && this.order.delay_delivery ) ? this.order.delay_delivery : { } },

        is_seif_get() {
            const src = (this._deiiev) ? this._deiiev.delivery_method + '' : ''
            return (src.endsWith('自取') || src.startsWith('自取'))
        }
    },
}
</script>
