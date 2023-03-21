<template>
    <div class="fx-l ">
        <time-doub class="bg-FFF input-clear pr bxs_n mh-42"></time-doub>
        <span class="px_s"></span>

        <ui-search-def class="input-7 bxs_n" 
          :pahd="'請輸入產品編號、名稱、類別或店鋪名'">
        </ui-search-def>
        <span class="px_s"></span>

        <vf-prospecification-select class="input-filter input-sus input-short bd-0"></vf-prospecification-select>

        <span class="px_s"></span>
        <button class="btn-pri btn-input py_s px_x2">查找</button>
    </div>
</template>

<script>
import VfProspecificationSelect from '../../../../component/view_form/pros/VfProspecificationSelect.vue'
import UiSearchDef from '../../../../funcks/ui_element/search/UiSearchDef.vue'
import TimeDoub from '../../../../funcks/ui_element/timed/doub/TimeDoub.vue'
export default {
  components: { UiSearchDef, TimeDoub, VfProspecificationSelect },

}
</script>

<style>

</style>