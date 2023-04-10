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
                </div>
                <div class="fx-l pr_x2">
                    <i class="mdi mdi-calendar-range"></i>:
                    &nbsp;&nbsp;{{ timed.view( date ) }}
                </div>
                <div class="fx-1 fx-l pr t-elip_x2" v-if="remark">
                    備註:
                    &nbsp;&nbsp;<span>{{ remark }}</span>
                </div>
            </div>
        </div>
        <div class="co-cake-card-fixed">
            <view-order-pay-status :_is_pay="paid"/>
        </div>
    </div>
</template>

<script>

import timed from '../../air/tooi/timed';
import VarCakeCover from '../../front/variab/cake/VarCakeCover.vue'
import VarCakeName from '../../front/variab/cake/VarCakeName.vue'
import ViewOrderPayStatus from '../view/order_status/pay/ViewOrderPayStatus.vue';

export default {
    components: { VarCakeName, VarCakeCover, ViewOrderPayStatus },
    props: [ 'cake', 'date', 'num', 'remark', 'paid' ],
    methods: {
        viewOrder() {
            this.pina().search( this.num )
            this.$router.push('/admin/order/')
            this.pina().mod(0)
        }
    }
}
</script>