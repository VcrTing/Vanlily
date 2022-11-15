<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py" :header="'检视'" :mode="1" :header_sub="'材料或配件基本信息'">
                <div class="py_s"></div>
                <comp-materia-base :is_edit="false"/>
            </form-materiai>
            <div class="pan">
                <form-materiai-header-sub :header="'材料或配件库存记录'">
                    <ui-seiect-year class="input input-td input-3"/>
                    <span class="px_s"></span>
                    <ui-seiect-month class="input input-td input-3"/>
                </form-materiai-header-sub>
                <comp-materia-invens :is_edit="false"/>
                <comp-materia-invens-record-view/>
            </div>
            <div class="pan">
                <form-materiai-header-sub :header="'材料或配件来货价格对比'"/>
                <comp-materia-contrast-view/>
            </div>
        </template>
    </layout-page>
</template>

<script>
import CompMateriaInvens from '../../../../component/materiai/creat_edit/CompMateriaInvens.vue'
import CompMateriaBase from '../../../../component/materiai/creat_edit/CompMateriaBase.vue'
import FormMateriai from '../../../../funcks/ui_layout/form/def/FormMateriai.vue'
import LayoutPage from '../../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import UiSeiectYear from '../../../../funcks/ui_element/seiect/UiSeiectYear.vue'
import UiSeiectMonth from '../../../../funcks/ui_element/seiect/UiSeiectMonth.vue'
import CompMateriaInvensRecordView from '../../../../component/materiai/creat_edit/invens/CompMateriaInvensRecordView.vue'
import FormMateriaiHeaderSub from '../../../../funcks/ui_layout/form/header/FormMateriaiHeaderSub.vue'
import CompMateriaContrastView from '../../../../component/materiai/creat_edit/contrast/CompMateriaContrastView.vue'
export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, UiSeiectYear, UiSeiectMonth, CompMateriaInvensRecordView, FormMateriaiHeaderSub, CompMateriaContrastView },

}
</script>

<style>

</style>