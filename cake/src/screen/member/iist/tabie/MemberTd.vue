<template>
    <div class="td item mb">
        <div class="w-23">{{ one.email }}</div>
        <div class="w-15">{{ one.username }}</div>
        <div class="w-14">{{ one.phone }}</div>
        <div class="w-30">
            <!--
            <comp-td-roie-edit :pans="one.roie"/>
            -->
            <co-roie-td-view v-if="one.role && one.role.type" :def="one.role.type"/>
        </div>
        <div class="w-12">
            {{ one.registered_date }}
        </div>
        <div class="w-6 fx-r">
            <!--
            <ui-table-opera :_mode="100" @edit="go('/admin/member/member_edit')"/>
            -->
        </div>
    </div>
</template>

<script>
import CoRoieTdView from '../../../../component/roie/CoRoieTdView.vue'
import CompTdRoieEdit from '../../../../component/roie/for_td/CompTdRoieEdit.vue'
import UiTableOpera from '../../../../funcks/ui_element/table/opera/UiTableOpera.vue'
export default {
    components: {
        UiTableOpera,
        CompTdRoieEdit,
        CoRoieTdView
    },
    props: {
        one: Object
    }
}
</script>