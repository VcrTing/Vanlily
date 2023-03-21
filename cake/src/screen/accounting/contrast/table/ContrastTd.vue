<template>
    <div class="td item">
        <div class="w-3">&nbsp;</div>
        <div class="w-10">{{ one.number }}</div>
        <div class="w-9">
            {{ one.typed }}
        </div>
        <div class="w-23 pr">
            {{ one.named }}
        </div>
        <div class="w-12">
            {{ one.brand }}
        </div>
        <div class="w-7">
            {{ one.stas }}
        </div>
        <div class="w-27">
            {{ one.remark }}
        </div>
        <div class="w-9 t-c">
            <ui-table-opera @view="viewItem"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera },
    props: [ 'one' ],
    methods: {
        viewItem() { this.$parent.change() }
    }
}
</script>

<style>

</style>