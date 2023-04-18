<template>
    <div class="fx-l co-cake-card br upper">
        <div class="w-10">
            <var-cake-cover class="ccc-cover" :prod="cake" :is_div="true"/>
        </div>
        <div class="fx-1 pl_x3 py_s">
            <h4 class="t-elip_x1 softer">
                <var-cake-name :prod="cake" v-if="cake"/>
                <div v-else>&nbsp;</div>
            </h4>
            <div class="pt fx-l upper fx-t">
                <div class="fx-l pr_x2">
                    單號:
                    &nbsp;&nbsp;<span class="hand" @click="viewOrder(num)">{{ num }}</span>
                    &nbsp;&nbsp;<ui-copy-icon class="" :txt="num"/>
                </div>
                <div class="fx-l pr_x2">
                    <i class="mdi mdi-calendar-range"></i>:
                    &nbsp;&nbsp;{{ timed.view( date ) }}
                </div>
                <div class="fx-1 fx-l pr fx-t" v-if="remark">
                    備註:&nbsp;&nbsp;
                    <div class="fx-1 t-elip_x2">
                        <span>{{ remark }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="co-cake-card-fixed op-0">
            <view-order-pay-status :_is_pay="paid"/>
        </div>
    </div>
</template>

<script>

import timed from '../../air/tooi/timed';
import VarCakeCover from '../../front/variab/cake/VarCakeCover.vue'
import VarCakeName from '../../front/variab/cake/VarCakeName.vue'
import UiCopyIcon from '../../funcks/ui_element/table/UiCopyIcon.vue';
import ViewOrderPayStatus from '../view/order_status/pay/ViewOrderPayStatus.vue';

export default {
    components: { VarCakeName, VarCakeCover, ViewOrderPayStatus, UiCopyIcon },
    props: [ 'cake', 'date', 'num', 'remark', 'paid' ],
    methods: {
        viewOrder() {
            return new Promise(rej => {
                this.pina().search( this.num )
                this.$router.push('/admin/order/')
                this.pina().mod(0)
                rej(0)
            })
        }
    }
}
</script>