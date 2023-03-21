<template>
    <div class="td item">
        <div class="w-5">&nbsp;</div>
        <div class="w-14">
            {{ one.tit }}
        </div>
        <div class="w-11">
            {{ one.num }}
        </div>
        <div class="w-42">
            HKD&nbsp;<money :v="one.salary"></money>
        </div>
        <div class="w-16">
            {{ timed.view(one.date) }}
        </div>
        <div class="w-12 t-c">
            <ui-table-opera @view="viewItem"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import Money from '../../../../funcks/ui/money/Money.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { Money, UiTableOpera },
    props: [ 'one' ],
    methods: {
        viewItem() { this.$parent.change() }
    }
}
</script>

<style>

</style>