<template>
    <div>
        <div class="fx-s pb_s">
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
                運費：
                <view-money v-if="deiiv.id" :money="deiiv.delivery_fee"/>
            </p>
        </div>
        <div class="fx-s pb">
            <p class="w-333">
                取貨：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <vf-send-company-select v-if="deiiv.id" :def="deiiv.delivery_company" :_txt_mode="true"/>
            </p>
            <!--
            <p class="w-333"> 
                電話：
                <span>{{ deiiv.delivery_man_phone_no }}</span>
            </p>
            -->
        </div>

        <div class="panel-inner px_x2 py">
            <p class="cold">送貨地址</p>
            <div class="pt">
                <vf-send-type-choise v-if="deiiv.id" class="px bg-FFF" :def="deiiv.delivery_method" :_txt_mode="true"/>
                <div class="fx-l px_x2 pt_x2">
                    <div class="w-25">
                        <p class="cold">地區 / 地铁線路</p>
                        <p class="pl-2em">{{ deiiv.delivery_address_1 }}</p>
                    </div>
                    <div class="w-25">
                        <p class="cold">地域 / 地鐵站</p>
                        <p class="pl-2em">{{ deiiv.delivery_address_2 }}</p>
                    </div>
                    <div class="w-50">
                        <p class="cold">備註 / 詳細地址</p>
                        <p class="pl-2em">{{ deiiv.delivery_address_3 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ViewMoney from '../../../view/money/ViewMoney.vue'
import VfSendCompanySelect from '../../../view_form/send/VfSendCompanySelect.vue'
import VfSendTimeSelect from '../../../view_form/send/VfSendTimeSelect.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
import VfSendTypeSelect from '../../../view_form/send/VfSendTypeSelect.vue'
export default {
    components: {
        VfSendTimeSelect,
        VfSendTypeSelect,
        ViewMoney,
        VfSendTypeChoise,
        VfSendCompanySelect 
    },
    props: {
        order: Object
    },
    computed: {
        deiiv() { return this.order ? this.order.delivery_info : { } },
    },
}
</script>