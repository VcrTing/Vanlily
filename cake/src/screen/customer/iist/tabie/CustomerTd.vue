<template>
    <div class="item td mb">
        <div class="w-5">&nbsp;</div>
        <div class="w-22 w-28-p">{{ one.username }}</div>
        <div class="w-20">
            <div class="pri_hv hand" @click="viewFormerly(one.phone_no)">{{ one.phone_no }}</div>
        </div>
        <div class="w-16">
            {{ one.order_count }}&nbsp;&nbsp;
        </div>
        <div class="w-26 w-20-p">&nbsp;</div>
        <div class="w-11 t-c">
            <ui-table-opera :_mode="-1" @edit="() => {
                memberPina().do_customer(one);
                go('customer/edit');
                }"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import FkSearchOidOrder from '../../../../funcks/order/static/FkSearchOidOrder.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera, FkSearchOidOrder },
    props: [ 'one' ],
    methods: {
        viewFormerly(p) {
            sessionStorage.setItem('vaniiiy_cake_phoned', p + '')
            this.pina().mod( 36 )
        }
    }
}
</script>