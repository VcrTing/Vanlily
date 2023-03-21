<template>
    <div v-for="(v, i) in items" :key="i" class="fx-l checkbox-roie">
        <ui-checkbox :txt="v.txt" :def="v.def"/>
    </div>
</template>

<script>
import UiCheckbox from "../../../funcks/ui_element/input/checkbox/UiCheckbox.vue"

export default {
    components: { UiCheckbox },
    data() {
        return {
            items: [
                { txt: '订单', def: false, code: 'order' },
                { txt: '行事薄', def: false, code: 'work' },
                { txt: '客户', def: false, code: 'customer' },
                { txt: '分析', def: false, code: 'order' },
                { txt: '会计', def: false, code: 'account' },
                { txt: '用户管理', def: false, code: 'member' }
            ]
        }
    }
}
</script>

<style>

</style>