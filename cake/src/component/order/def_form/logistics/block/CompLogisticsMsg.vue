<template>
    <div class="fx-l fx-t">
        <div class="w-25">
            <div class="pb_s">取貨：
                <vf-send-company-select v-if="deiiv.id" :_txt_mode="true" :def="deiiv.delivery_company"/>
            </div>
            <div>送貨員：<span>{{ deiiv.delivery_man_name }}</span></div>
        </div>
        <div class="w-28">
            <div class="pb_s">運費：
                <view-money :money="deiiv.delivery_fee"/>
            </div>
            <div>聯絡電話：<span>{{ deiiv.delivery_man_phone_no }}</span></div>
        </div>
        <div class="w-25">
            <div class="pb_s">附加運費：
                <view-money :money="deiiv.additional_fee"/>
            </div>
            <div>取貨時間：<span>{{ deiiv.delivery_man_pickup_time }}</span></div>
        </div>
        <div class="w-47">
            <div class="pb_s fx-l fx-t">備註：<div class="fx-1" v-if="order">{{ order.remarks_1 }}</div></div>
        </div>
            <!--
        <div class="w-22 fx-c">
            <span class="sts-i-pri"><i class="h5 mdi mdi-check"></i></span>
            <span class="pl_s">蛋糕已送達</span>
        </div>
            -->
    </div>
</template>

<script>
import ViewMoney from '../../../../view/money/ViewMoney.vue'
import VfSendCompanySelect from '../../../../view_form/send/VfSendCompanySelect.vue'
import VfSendTypeChoise from '../../../../view_form/send/VfSendTypeChoise.vue'
import VfSendTypeSelect from '../../../../view_form/send/VfSendTypeSelect.vue'
export default {
  components: { VfSendTypeChoise, ViewMoney, VfSendTypeSelect, VfSendCompanySelect },
    props: [ 'order' ],
    computed: {
        deiiv() {
            if (this.order) {
                return this.order.delivery_info
            }
            return { }
        }
    }
}
</script>