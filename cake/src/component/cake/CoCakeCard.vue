<template>
    <div class="fx-l co-cake-card br upper">
        <div class="w-10">
            <var-cake-cover :prod="cake"/>
        </div>
        <div class="fx-1 pl_x3">
            <h4 class="t-elip_x1">
                <var-cake-name :prod="cake" v-if="cake"/>
                <div v-else>&nbsp;</div>
            </h4>
            <div class="pt_x fx-l">
                <div class="fx-l pr_x2">
                    單號:
                    &nbsp;&nbsp;{{ num }}
                </div>
                <div class="fx-l pr_x2">
                    <i class="mdi mdi-calendar-range"></i>:
                    &nbsp;&nbsp;{{ timed.view( date ) }}
                </div>
                <div class="fx-l pr t-elip_x1" v-if="remark">
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
    mounted() {
        console.log('cake =', this.cake)
    },
    computed: {

    }
}
</script>