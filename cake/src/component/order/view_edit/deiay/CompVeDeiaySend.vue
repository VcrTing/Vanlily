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
                運費：
                <view-money v-if="deiiv.id" :money="deiiv.delivery_fee"/>
            </div>
        </div>

        <div class="fx-l py_x2 fx-t">
            <div class="w-25">
                <span class="">地區 / 地铁線路:&nbsp;&nbsp;&nbsp;</span>
                <span class="">{{ deiiv.delivery_address_1 }}</span>
            </div>
            <div class="w-25">
                <span class="">地域 / 地鐵站:&nbsp;&nbsp;&nbsp;</span>
                <span class="">{{ deiiv.delivery_address_2 }}</span>
            </div>
            <div class="w-50">
                <span class="">詳細地址:&nbsp;&nbsp;&nbsp;</span>
                <span class="">{{ deiiv.delivery_address_3 }}</span>
            </div>
        </div>

        <div class="panel-inner px_x2 py">
            <p class="cold">送貨信息</p>
            <div class="pt">
                <vf-send-type-choise v-if="deiiv.id" class="px bg-FFF" :def="deiiv.delivery_method" :_txt_mode="true"/>
                <vf-send-company-choise class="pl_x3 py_x2 fx-l" :def="deiiv.delivery_company" :_txt_mode="true"/>
                
                <co-deiivery-money-msg :deiive="deiiv"/>
                <!--
                <div class="fx-s pl_x2" v-if="!is_seif_get">
                    <div class="fx-1 pr_x2">
                        <co-deiivery-man-card :deiive="deiiv"/>
                    </div>

                    <div class="w-25 fx-l">
                        取貨時間:&nbsp;&nbsp;
                        <div class="fx-l">
                            <span v-if="deiiv.delivery_man_pickup_time">{{ deiiv.delivery_man_pickup_time }}</span>
                            <span v-else class="sub">(未紀錄)</span>
                            &nbsp;
                            <i class="mdi mdi-clock-time-four-outline h5"></i>
                        </div>
                    </div>
                </div>
                <div v-else class="pl_x4">
                    (自取，無需送貨員)
                </div>
                -->

            </div>
        </div>
    </div>
</template>

<script>
import CoDeiiveryManCard from '../../../addr/for_order/cp/CoDeiiveryManCard.vue'
import CoDeiiveryMoneyMsg from '../../../addr/for_order/cp/CoDeiiveryMoneyMsg.vue'
import ViewMoney from '../../../view/money/ViewMoney.vue'
import VfSendCompanyChoise from '../../../view_form/send/VfSendCompanyChoise.vue'
import VfSendCompanySelect from '../../../view_form/send/VfSendCompanySelect.vue'
import VfSendTimeSelect from '../../../view_form/send/VfSendTimeSelect.vue'
import VfSendTypeChoise from '../../../view_form/send/VfSendTypeChoise.vue'
import VfSendTypeSelect from '../../../view_form/send/VfSendTypeSelect.vue'

export default {
    components: {
        VfSendTimeSelect, VfSendTypeSelect, VfSendCompanyChoise,
        ViewMoney, VfSendTypeChoise, VfSendCompanySelect, CoDeiiveryManCard, CoDeiiveryMoneyMsg,
    },
    props: { order: Object },
    computed: {
        deiiv() { return this.order ? this.order.delivery_info : { } },
        is_seif_get() {
            const src = (this.deiiv) ? this.deiiv.delivery_method + '' : ''
            return (src.endsWith('自取') || src.startsWith('自取'))
        }
    },
}
</script>