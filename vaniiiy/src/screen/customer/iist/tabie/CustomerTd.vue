<template>
    <div class="item td mb">
        <div class="w-5">&nbsp;</div>
        <div class="w-18 w-28-p">{{ one.name }}</div>
        <div class="w-20">{{ one.phone }}</div>
        <div class="w-16">{{ one.order_num }}</div>
        <div class="w-30 w-20-p">&nbsp;</div>
        <div class="w-11 t-c">
            <ui-table-opera :_mode="2" @edit="go('customer/edit')"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ]
}
</script>

<style>

</style>