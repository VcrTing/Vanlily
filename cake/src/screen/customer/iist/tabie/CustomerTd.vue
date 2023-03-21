<template>
    <div class="item td mb">
        <div class="w-5">&nbsp;</div>
        <div class="w-22 w-28-p">{{ one.username }}</div>
        <div class="w-20">{{ one.phone_no }}</div>
        <div class="w-16">{{ one.order_count }}</div>
        <div class="w-26 w-20-p">&nbsp;</div>
        <div class="w-11 t-c">
            <ui-table-opera :_mode="2" @edit="() => {
                memberPina().do_customer(one);
                go('customer/edit');
                }"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ],
    methods: {

    }
}
</script>