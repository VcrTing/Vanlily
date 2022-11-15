<template>
    <div class="td item mb">
        <div class="w-3">&nbsp;</div>
        <div class="w-17">{{ one.email }}</div>
        <div class="w-13">{{ one.name }}</div>
        <div class="w-12">{{ one.phone }}</div>
        <div class="w-48">
            <comp-td-roie-edit :pans="one.roie"/>
        </div>
        <div class="w-7">
            <ui-table-opera :_mode="100" @edit="go('/admin/member/member_edit')"/>
        </div>
    </div>
</template>

<script>
import CompTdRoieEdit from '../../../../component/roie/for_td/CompTdRoieEdit.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: {
        UiTableOpera,
        CompTdRoieEdit
    },
    props: {
        one: Object
    }
}
</script>

<style>

</style>
