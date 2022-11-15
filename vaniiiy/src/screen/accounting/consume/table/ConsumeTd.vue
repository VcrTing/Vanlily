<template>
    <div class="item td">
        <div class="w-8">
            <span class="tag tag-pri_light" v-if="one.is_new">New</span>
        </div>
        <div class="w-14">
            {{ one.number }}
        </div>
        <div class="w-11">
            {{ timed.view(one.date) }}
        </div>
        <div class="w-19">
            {{ one.content }}
        </div>
        <div class="w-9">
            {{ one.typed }}
        </div>
        <div class="w-8">
            {{ one.unit }}
        </div>
        <div class="w-10">
            <money :v="one.money"></money>
        </div>
        <div class="w-12">
            <span class="pri_son">{{ one.pdf.named }}</span>
        </div>
        <div class="w-9">
            <ui-table-opera @view="expanel"></ui-table-opera>
        </div>
    </div>
</template>

<script>
import Money from '../../../../funcks/ui/money/Money.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: { UiTableOpera, Money },
    props: [ 'one' ],
    methods: {
        expanel() { this.$parent.change() }
    }
}
</script>

<style>

</style>