<template>
    <div>
        <div class="fx-s row_x2">
            <div class="w-333">
                送貨日期：
                <span>{{ deiiv.delivery_date }}</span>
            </div>
            <div class="w-333"> 
                送貨時間：
                <vf-send-time-select v-if="deiiv.delivery_time" :def="deiiv.delivery_time" :_txt_mode="true"/>
                <span v-else></span>
            </div>
            <div class="w-333">
                實際送貨時間：
                <span v-if="deiiv.actual_delivery_time">{{ deiiv.actual_delivery_time }}</span>
            </div>
        </div>
        <div class="py"></div>
        <div class="fx-s row_x2" v-if="!is_seif_get">
            <div class="w-25">
                地區 / 地鐵線路：
                {{ vai('delivery_address_1') }}
            </div>
            <div class="w-25">
                地域 / 地鐵站：
                {{ vai('delivery_address_2') }}
            </div>
            <div class="fx-1">
                詳細地址：
                {{ vai('delivery_address_3') }}
            </div>
        </div>
        <div v-else>
            <div>
                (自取)
            </div>
        </div>
        <div class="py"></div>
    </div>
</template>
<script>
import CpOaaBlock from '../../../addr/for_order/cp/CpOaaBlock.vue'
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTimeSelect from '../../../view_form/send/VfSendTimeSelect.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'

export default {
    components: { CpOaaBlock, VfSendTimeSelect, VfSendTypeChoise, VfSendCompanyChoise },
    props: {  order: Object },
    computed: {
        deiiv() { return (this.order && this.order.delivery_info) ? this.order.delivery_info : { } },

        d_type() {
            return (this.deiiv) ? this.deiiv.delivery_type : null
        },
        is_seif_get() {
            const src = (this.deiiv) ? this.deiiv.delivery_method + '' : ''
            return (src.endsWith('自取') || src.startsWith('自取'))
        }
    },
    methods: {
        vai_type(k) { return this.d_type ? this.d_type[k] : '' },

        vai(k, def = '') { return this.deiiv ? this.deiiv[k] : def },
    }
}
/*

        <!--
        <div class="fx-s row_x2">
            <div class="w-333">
                送貨人員：
                <span v-if="deiiv.delivery_man_name">{{ deiiv.delivery_man_name }}</span>
                <span v-else class="err">(未紀錄)</span>
            </div>
            <div class="w-333"> 
                電話：
                <span v-if="deiiv.delivery_man_phone_no">{{ deiiv.delivery_man_phone_no }}</span>
                <span v-else class="sus">(未紀錄)</span>
            </div>
            <div class="w-333">
                取貨時間：
                <span>{{ deiiv.delivery_man_pickup_time }}</span>
            </div>
        </div>
        -->
        */
</script>