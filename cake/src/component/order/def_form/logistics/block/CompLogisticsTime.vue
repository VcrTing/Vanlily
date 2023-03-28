<template>
        <div class="fx-l fx-t">
            <div class="w-50 fx-l fx-t">
                <div class="w-46">
                    送貨日期：
                    <span>{{ timed.view( deiiv.delivery_date ) }}</span>
                </div>
                <div class="w-54">
                    送貨時段：
                    <vf-send-time-select :def="deiiv.delivery_time" :_txt_mode="true"/>
                    &nbsp;&nbsp;
                    <button class="btn-succ">已更新</button>
                </div>
            </div>
            <div class="w-50 fx-l fx-t">
                <div class="w-40">
                    實際送貨時間：<span>{{ deiiv.actual_delivery_time }}</span>
                </div>
                <div class="w-60 fx-l fx-t">
                    <div>
                        錄入地址：
                    </div>
                    <div class="fx-1">
                        <span>{{ deiiv.delivery_address_1 }}</span>
                        <span>{{ deiiv.delivery_address_2 }}</span>
                        <span>{{ deiiv.delivery_address_3 }}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import timed from '../../../../../air/tooi/timed';
import VfSendTimeSelect from '../../../../view_form/send/VfSendTimeSelect.vue';

export default {
  components: { VfSendTimeSelect },
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