<template>
    <div>
        <div class="fx-s pb">
            <p class="w-333">
                送貨日期：
                <span>{{ deiiv.delivery_date }}</span>
            </p>
            <p class="w-333"> 
                送貨時間：
                <vf-send-time-select v-if="deiiv.delivery_time" :def="deiiv.delivery_time" :_txt_mode="true"/>
                <span v-else></span>
            </p>
            <p class="w-333">
                實際送貨時間：
                <span>{{ deiiv.actual_delivery_time }}</span>
            </p>
        </div>
        <div class="fx-s pb">
            <p class="w-333">
                送貨人員：
                <span v-if="deiiv.delivery_man_name">{{ deiiv.delivery_man_name }}</span>
                <span v-else class="cold">(未紀錄)</span>
            </p>
            <p class="w-333"> 
                電話：
                <span v-if="deiiv.delivery_man_phone_no">{{ deiiv.delivery_man_phone_no }}</span>
                <span v-else class="cold">(未紀錄)</span>
            </p>
            <p class="w-333">
                取貨時間：
                <span>{{ deiiv.delivery_man_pickup_time }}</span>
            </p>
        </div>
    </div>
</template>
<script>
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendTimeSelect from '../../../view_form/send/VfSendTimeSelect.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
export default {
    components: {
        VfSendTimeSelect,
        VfSendTypeChoise,
        VfSendCompanyChoise
    },
    props: { 
        order: Object
    },
    computed: {
        deiiv() { return this.order ? this.order.delivery_info : { } },
    },
}
</script>