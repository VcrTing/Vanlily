<template>
    <div class="item td td-pr">
        <div class="w-4 t-l"></div>
        <div class="w-8 ">{{ one.number }}</div>
        <div class="w-8 ">{{ one.typed.named }}</div>
        <div class="w-24">{{ one.named }}</div>
        <div class="w-11">{{ one.brand.named }}</div>
        <div class="w-6">{{ one.invent }}</div>
        <div class="w-6">{{ one.used }}</div>
        <div class="w-6">{{ one.bad }}</div>
        <div class="w-6">{{ one.specifications.size.named }}</div>
        <div class="w-12">{{ one.remark }}</div>
        <div class="w-9 t-c">
            <ui-table-opera
                @view="view" @edit="edit"
            ></ui-table-opera>
        </div>
    </div>
</template>
<script>
import Collapse from '../../../../../funcks/ui/collapse/Collapse.vue'
import CollapseTdItem from '../../../../../funcks/ui/collapse/table/CollapseTdItem.vue'
import UiTableOpera from '../../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
  components: { UiTableOpera, Collapse, CollapseTdItem },
    props: [ 'one' ],
    methods: {
        view() { this.$parent.change()},
        edit() { }
    },
    data() {
        return {
        }
    },
}
</script>