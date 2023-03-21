<template>
    <layout-form :header="'用户信息'" :class="''">
        <template v-slot:opera>
            <fo-form-opera class="fx-r pb" @cancie="go('/admin/member_iist')"/>
        </template>
        <template v-slot:cont>
            <div class="py"></div>
            <comp-member-creat-edit-form :is_edit="true"/>
            <div class="py_x2"></div>
        </template>
    </layout-form>
</template>

<script>
import CompMemberCreatEditForm from '../../../component/member/creat_edit/CompMemberCreatEditForm.vue'
import FoFormOpera from '../../../front/button/FoFormOpera.vue'
import LayoutForm from '../../../funcks/ui_layout/layout/page/LayoutForm.vue'
export default {
  components: { LayoutForm,
    FoFormOpera,
    CompMemberCreatEditForm },

}
</script>

<style>

</style>