<template>
    <layout-page :_class="''">
        <template v-slot:cont>
            <form-materiai class="pan py" :header="'新增产品或配件'" :header_sub="'材料或配件基本信息'">
                <comp-materia-base/>
            </form-materiai>
            <form-materiai class="pan pb" :header_sub="'材料或配件库存记录'">
                <comp-materia-invens/>
                <comp-materia-invens-record class="px_x2"/>
            </form-materiai>
            <form-materiai class="pan pb" :header_sub="'材料或配件来货价格对比'">
                <comp-materia-contrast class="px_x2"/>
            </form-materiai>
        </template>
    </layout-page>
</template>

<script>
import CompMateriaContrast from '../../../../component/materiai/creat_edit/contrast/CompMateriaContrast.vue'
import CompMateriaInvens from '../../../../component/materiai/creat_edit/CompMateriaInvens.vue'
import CompMateriaBase from '../../../../component/materiai/creat_edit/CompMateriaBase.vue'
import FormMateriai from '../../../../funcks/ui_layout/form/def/FormMateriai.vue'
import LayoutPage from '../../../../funcks/ui_layout/layout/page/LayoutPage.vue'
import CompMateriaInvensRecord from '../../../../component/materiai/creat_edit/invens/CompMateriaInvensRecord.vue'
export default {
  components: { LayoutPage, FormMateriai, CompMateriaBase, CompMateriaInvens, CompMateriaContrast, CompMateriaInvensRecord },

}
</script>

<style>

</style>